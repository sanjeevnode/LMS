import { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { getBorrowStudent, returnAllBooks } from "../../../config";
import { Context } from "../../../App";
import StudentDetails from "./StudentDetails";
import BookDetails from "./BookDetails";

const ReturnBook = () => {
  const searchInput = useRef(null);
  const { setLoading } = useContext(Context);
  const [student, setStudent] = useState({});
  const [bookList, setBookList] = useState([]);

  const getdata = async () => {
    const { student, available } = await getBorrowStudent(
      searchInput.current.value
    );

    if (student) {
      const data = student.student;
      setStudent({
        ...data,
        borrowDate: student.borrowDate,
        returnDate: student.returnDate,
      });
      setBookList(student.books);
      setLoading(false);
    } else if (!available) {
      setLoading(false);
      setBookList([]);
      setStudent({});
      searchInput.current.value = "";
      toast.error("Student not available", {
        duration: 1000,
      });
    }
  };

  const handleReturnAll = async () => {
    setLoading(true);
    const status = await returnAllBooks(student._id);
    if (status) {
      setStudent({});
      setBookList([]);
      searchInput.current.value = "";
      toast.success("Books returned successfully", {
        duration: 1000,
      });
      setLoading(false);
    } else {
      setLoading(false);
      toast.error("Something went wrong", {
        duration: 1000,
      });
    }
  };

  const handleSearch = async () => {
    if (searchInput.current.value === "") {
      toast.error("Fill enrollment number", {
        duration: 1500,
      });
      return;
    }
    setLoading(true);
    await getdata();
  };
  const hadleReset = () => {
    searchInput.current.value = "";
    setStudent({});
    setBookList([]);
  };
  return (
    <div className="w-full h-full flex justify-center  overflow-y-auto">
      <div className="w-3/4 h-auto  rounded-md py-8 px-4 flex flex-col gap-8">
        {/* header */}
        <div className="w-full flex justify-between items-center">
          <div className="w-full h-auto flex justify-between items-center py-4 px-8 bg-secondary rounded-md">
            <span className="text-[20px] text-primary">Return Books</span>

            <div className="flex gap-2 justify-center items-center">
              <input
                type="text"
                className="text-text outline-none  bg-[#F3F3F3] px-3 py-2 text-[16px]  rounded-md"
                placeholder="type here ..."
                ref={searchInput}
              />
              <button
                onClick={handleSearch}
                className="outline-none py-1 px-3 rounded-md bg-accent  text-[18px] "
              >
                <span className="text-secondary  text-[16px]">Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* details */}

        {student && bookList.length > 0 ? (
          <div className="bg-secondary px-8 py-4 rounded-md">
            <StudentDetails student={student} />

            <BookDetails
              bookList={bookList}
              student={student}
              setBookList={setBookList}
            />

            <div className="w-full flex justify-end gap-4 py-4">
              <button
                onClick={handleReturnAll}
                className="outline-none text-[14px] rounded-sm text-secondary bg-[rgb(121,167,231)] py-1 px-3"
              >
                <span>Return All</span>
              </button>
              <button
                onClick={hadleReset}
                className="outline-none text-[14px] rounded-sm text-secondary bg-[rgb(231,107,111)] py-1 px-3"
              >
                <span>Reset</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full h-fit flex justify-center items-center py-16 bg-secondary rounded-md">
            <span className="text-accent text-5xl  opacity-80">
              Nothing to show ..
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReturnBook;
