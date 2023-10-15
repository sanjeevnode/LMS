/* eslint-disable react/prop-types */
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const BookList = ({ books, handleDeleteBook, setCurrentBook, edit }) => {
  return (
    <>
      <table className=" table-auto w-full border text-[12px] border-separate text-center p-2">
        <tbody>
          <tr>
            <th>Sno.</th>
            <th>Book Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
          {books.map((book, index) => {
            const handleEditClicked = () => {
              setCurrentBook(book);
              edit.current = true;
            };

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.bookId}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.count}</td>
                <td className="flex gap-2 justify-center items-center">
                  <BiEdit
                    onClick={handleEditClicked}
                    className="text-[rgb(121,167,231)] text-[20px] cursor-pointer"
                  />
                  <AiOutlineDelete
                    onClick={() => {
                      handleDeleteBook(book._id);
                      setCurrentBook({
                        title: "",
                        author: "",
                        price: "",
                        category: "",
                        count: "",
                      });
                      edit.current = false;
                    }}
                    className="text-[rgb(231,107,111)] text-[20px] cursor-pointer"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BookList;
