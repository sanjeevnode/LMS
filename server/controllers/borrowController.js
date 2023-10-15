import Borrow from "../models/borrowModel.js";
import Book from "../models/bookModel.js";

/*
 * @desc    Borrow a book
 */

const borrowBook = async (req, res) => {
  try {
    const { student, books } = req.body;

    const existingStudent = await Borrow.findOne({
      "student._id": student._id,
    });

    const isPending = true;

    if (existingStudent) {
      res.status(200).json({
        isPending,
      });
      return;
    }

    const available = books.every((book) => book.count > 0);

    if (!available) {
      res.status(200).json({
        available,
      });
      return;
    }

    const currDate = new Date();
    const borrowDate = currDate.toDateString(undefined, {
      timeZone: "Asia/Kolkata",
    });
    const temp = currDate.getDate() + 7;
    currDate.setDate(temp);
    const returnDate = currDate.toDateString();

    const newBooks = books.map(({ count, price, ...rest }) => rest);
    const borrow = await Borrow.create({
      student,
      books: newBooks,
      borrowDate,
      returnDate,
    });

    await Book.updateMany({ _id: { $in: books } }, { $inc: { count: -1 } });

    res.status(201).json({
      created: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const getBorrowList = async (req, res) => {
  try {
    const list = await Borrow.find({}, "student books borrowDate returnDate");
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const getBorrowStudent = async (req, res) => {
  try {
    const { Id } = req.params;
    const studentDetail = await Borrow.findOne({
      "student.enrollment_number": Id,
    });

    if (studentDetail) {
      res.status(200).json({ student: studentDetail });
    } else {
      res.status(200).json({ available: false });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const returnBook = async (req, res) => {
  try {
    const { studentId, bookId } = req.params;

    const student = await Borrow.findOne({
      "student._id": studentId,
    });

    if (student) {
      await Book.updateMany({ _id: bookId }, { $inc: { count: +1 } });

      student.books = student.books.filter((book) => book._id !== bookId);
      student.save();

      if (student.books.length === 0) {
        await Borrow.findOneAndRemove({ "student._id": studentId });
      }

      res.status(204).end();
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const returnAllBooks = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Borrow.findOneAndDelete({ "student._id": studentId });

    if (student) {
      await Book.updateMany(
        { _id: { $in: student.books } },
        { $inc: { count: +1 } }
      );
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export {
  borrowBook,
  getBorrowList,
  getBorrowStudent,
  returnBook,
  returnAllBooks,
};
