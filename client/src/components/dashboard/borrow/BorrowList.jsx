/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { getBorrowedBooks } from "../../../config";
import { Context } from "../../../App";
const BorrowList = () => {
  const { setLoading } = useContext(Context);
  const [borrowList, setBorrowList] = useState([]);
  const [query, setQuery] = useState("");

  const getBorrowList = async () => {
    setLoading(true);
    const data = await getBorrowedBooks();
    data.reverse();
    setBorrowList(data);
    setLoading(false);
  };

  useEffect(() => {
    getBorrowList();
  }, []);

  const filteredList = borrowList.filter((list) => {
    return list.student.enrollment_number
      .toLowerCase()
      .includes(query.toLowerCase());
  });

  const handleClear = () => {
    setQuery("");
  };

  return (
    <div className="w-full h-full py-6">
      <div className="w-full h-auto flex justify-between p-4 items-center my-6 bg-secondary rounded-md">
        <span className="text-[20px] text-primary">Borrowed List</span>

        <div className="flex gap-2 justify-center items-center">
          <input
            type="text"
            className="text-text outline-none  bg-[#F3F3F3] px-3 py-1 text-[18px] rounded-md"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleClear}
            className="outline-none py-1 px-3 rounded-md bg-background  text-accent text-[16px] "
          >
            <span className="text-accent  text-[16px]">Clear</span>
          </button>
        </div>
      </div>

      {filteredList.length > 0 ? (
        <div className="w-full p-4 bg-secondary h-auto  overflow-y-auto">
          <table className="w-full table-auto text-center text-[16px] bg-secondary">
            <tbody>
              <tr className="text-accent">
                <th>Sno.</th>
                <th>Student</th>
                <th>Books</th>
                <th>Borrow date</th>
                <th>Return Date</th>
              </tr>

              {filteredList.map((list, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{list.student.enrollment_number}</td>
                    <td className="px-2">
                      <table className="w-full   text-center table-auto text-[14px]">
                        <tbody>
                          <tr className="text-accent">
                            <th>Sno.</th>
                            <th>BookId</th>
                            <th>Title</th>
                            <th>Author</th>
                          </tr>
                          {list.books.map((b, i) => {
                            return <Card key={i} b={b} i={i} />;
                          })}
                        </tbody>
                      </table>
                    </td>

                    <td>{list.borrowDate}</td>
                    <td>{list.returnDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full h-fit flex justify-center items-center py-16 bg-secondary rounded-md">
          <span className="text-accent text-5xl  opacity-80">
            Nothing to show ..
          </span>
        </div>
      )}
    </div>
  );
};

const Card = ({ b, i }) => {
  return (
    <tr>
      <td>{i + 1}</td>
      <td>{b.bookId}</td>
      <td>{b.title}</td>
      <td>{b.author}</td>
    </tr>
  );
};

export default BorrowList;
