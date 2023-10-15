/* eslint-disable react/prop-types */
import { GiReturnArrow } from "react-icons/gi";
import { returnBook } from "../../../config";
import toast from "react-hot-toast";
import { useContext } from "react";
import { Context } from "../../../App";

const BookDetails = ({ bookList, student, setBookList }) => {
  const { setLoading } = useContext(Context);
  return (
    <div className="w-full h-fit flex flex-col gap-4 py-4">
      <div className=" w-full flex justify-start items-center gap-2">
        <span className="text-[14px] text-text underline-offset-2 underline ">
          Book List
        </span>
      </div>
      {/* book list container */}
      <div className="w-full h-auto flex flex-col gap-4">
        <table className="table-auto w-full border text-[12px] border-separate text-center py-2">
          <tbody>
            <tr className="text-accent">
              <th>Sno.</th>
              <th>Book Id</th>
              <th>Title</th>
              <th>Author</th>
              <th>Return</th>
            </tr>
            {bookList.map((book, index) => {
              const handleReturn = async () => {
                setLoading(true);
                const status = await returnBook(student._id, book._id);
                if (status) {
                  const newList = bookList.filter((b) => b._id !== book._id);
                  setBookList(newList);

                  setLoading(false);
                } else {
                  setLoading(false);
                  toast.error("error", {
                    duration: 1000,
                  });
                }
              };
              return (
                <tr key={index} className="text-primary">
                  <td>{index + 1}</td>
                  <td>{book.bookId}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td className="flex justify-center items-center">
                    <GiReturnArrow
                      onClick={handleReturn}
                      className="text-[20px] text-[rgb(121,167,231)] cursor-pointer"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <span className="text-[14px] text-slate-400">Borrow Date :</span>
          <span className="text-[16px] text-primary">
            “ {student.borrowDate} ”
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[14px] text-slate-400">Return Date :</span>
          <span className="text-[16px] text-primary">
            “ {student.returnDate} ”
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
