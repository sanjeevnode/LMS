/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { borrowBook } from "../../../config";
import { useContext } from "react";
import { Context } from "../../../App";
const Summary = ({
  bookList,
  currentStudent,
  setBookList,
  setCurrentStudent,
}) => {
  const { setLoading, handleGetBooks } = useContext(Context);
  const handleCancel = () => {
    setBookList([]);
    setCurrentStudent({});
  };
  const handleSave = async () => {
    setLoading(true);
    if (bookList.length === 0 || currentStudent.length === 0) {
      toast.error("Please select a student and book", {
        duration: 700,
      });
      setLoading(false);
      return;
    }

    const { isPending, created, available } = await borrowBook(
      currentStudent,
      bookList
    );
    if (created) {
      setLoading(false);
      handleGetBooks();
      toast.success("Books assigned successfully", {
        duration: 700,
      });
      setBookList([]);
      setCurrentStudent({});
    } else if (isPending) {
      setLoading(false);
      toast.error("Student already has borrowed book", {
        duration: 1500,
      });
    } else if (!available) {
      setLoading(false);
      toast.error(" Some books are not available", {
        duration: 700,
      });
    } else {
      setLoading(false);
      toast.error("Something went wrong", {
        duration: 700,
      });
    }
  };
  return (
    <div className="w-full h-fit   flex flex-col  justify-center items-center pb-8">
      {/* main container */}
      <div className="w-3/4 flex justify-start p-2">
        <span className="text-[23px] text-primary ">Summary</span>
      </div>
      <div className="w-3/4 h-fit py-6 px-10 flex flex-col gap-6 justify-center items-center rounded-md bg-secondary">
        {currentStudent.enrollment_number || bookList.length > 0 ? (
          <>
            <div className="w-full flex flex-col gap-4 py-4 border-b border-slate-400">
              <div className="w-full flex justify-start items-center gap-2">
                <span className="text-[14px] text-text underline-offset-2 underline ">
                  Student Details
                </span>
              </div>
              <div className="flex w-full justify-between items-center">
                <div className="flex gap-2 justify-start items-center">
                  <span className="text-[16px] text-slate-400">
                    Enrollment:
                  </span>
                  <span className="text-[16px] text-primary">
                    {currentStudent ? currentStudent.enrollment_number : ""}
                  </span>
                </div>
                <div className="flex gap-2 justify-start items-center">
                  <span className="text-[16px] text-slate-400">Branch:</span>
                  <span className="text-[16px] text-primary">
                    {currentStudent ? currentStudent.branch : ""}
                  </span>
                </div>
              </div>

              <div className="flex w-full justify-between items-center">
                <div className="flex gap-2 justify-start items-center">
                  <span className="text-[16px] text-slate-400">Name:</span>
                  <span className="text-[16px] text-primary">
                    {currentStudent ? currentStudent.name : ""}
                  </span>
                </div>

                <div className="flex gap-2 justify-start items-center">
                  <span className="text-[16px] text-slate-400">Semester:</span>
                  <span className="text-[16px] text-primary">
                    {currentStudent ? currentStudent.semester : ""}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full h-fit flex flex-col gap-4">
              <div className=" w-full flex justify-start items-center gap-2">
                <span className="text-[14px] text-text underline-offset-2 underline ">
                  Book List
                </span>
              </div>

              <div className="w-full h-auto flex flex-col gap-4">
                <table className="table-auto w-full border text-[12px] border-separate text-center py-2">
                  <tbody>
                    <tr className="text-accent">
                      <th>Sno.</th>
                      <th>Book Id</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Remove</th>
                    </tr>
                    {bookList.map((book, index) => {
                      const handleDeleteBook = () => {
                        const newBookList = bookList.filter(
                          (book) => book.bookId !== bookList[index].bookId
                        );
                        setBookList(newBookList);
                      };
                      return (
                        <tr key={index} className="text-primary">
                          <td>{index + 1}</td>
                          <td>{book.bookId}</td>
                          <td>{book.title}</td>
                          <td>{book.author}</td>
                          <td className="flex justify-center items-center">
                            <AiOutlineDelete
                              onClick={handleDeleteBook}
                              className="text-[20px] text-[rgb(231,107,111)] cursor-pointer"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="w-full flex justify-end gap-4">
                <button
                  onClick={handleSave}
                  className="outline-none text-[14px] rounded-sm text-secondary bg-[rgb(121,167,231)] py-1 px-3"
                >
                  <span>Save</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="outline-none text-[14px] rounded-sm text-secondary bg-[rgb(231,107,111)] py-1 px-3"
                >
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          </>
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

export default Summary;
