import Book from "../models/bookModel.js";

/*
 *Add a new book
 * POST
 */

const addBook = async (req, res) => {
  try {
    const { title, author, price, category, count } = req.body;
    const book = await Book.create({
      title,
      author,
      price,
      category,
      count,
    });

    res.status(201).json({
      _id: book._id,
      title: book.title,
      author: book.author,
      price: book.price,
      category: book.category,
      count: book.count,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*
 * Get all books
 * GET
 */

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({}, "title author price category count");
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*
 *Update book
 *PUT
 */

const updateBook = async (req, res) => {
  try {
    const { title, author, price, category, count } = req.body;
    const { _id } = req.params;

    const book = await Book.findById(_id);

    if (book) {
      book.title = title || book.title;
      book.author = author || book.author;
      book.price = price || book.price;
      book.category = category || book.category;
      book.count = count || book.count;

      await book.save();
    }

    res.status(200).json({
      _id: book._id,
      title: book.title,
      author: book.author,
      price: book.price,
      category: book.category,
      count: book.count,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*
 *Delete book by id
 *DELETE
 */

const deleteBookById = async (req, res) => {
  try {
    const { _id } = req.params;

    const book = await Book.findByIdAndDelete(_id);

    if (book) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { addBook, getBooks, updateBook, deleteBookById };
