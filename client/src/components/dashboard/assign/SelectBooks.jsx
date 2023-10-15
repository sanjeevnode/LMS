/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../App";
import toast from "react-hot-toast";

const SelectBooks = ({ setBookList }) => {
  const { books } = useContext(Context);
  const [query, setQuery] = useState("");
  const [filteredBook, setFilteredBook] = useState([]);

  useEffect(() => {
    if (query === "") {
      setFilteredBook([]);
    } else {
      const b = books.filter((book) => {
        return (
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase()) ||
          book.bookId.toLowerCase().includes(query.toLowerCase())
        );
      });
      setFilteredBook(b);
    }
  }, [query, books]);

  const handleClear = () => {
    setQuery("");
    setFilteredBook([]);
  };

  const handleSelect = () => {
    if (filteredBook.length === 0) {
      toast.error("Please select a book", {
        duration: 700,
      });
      return;
    }

    if (filteredBook[0].count > 0) {
      setBookList((prev) => [...prev, filteredBook[0]]);
      setQuery("");
    } else {
      toast.error("Book not available", {
        duration: 1000,
      });
    }
  };

  return (
    <div className="w-3/4 h-2/5  bg-secondary  rounded-md  flex flex-col gap-2 p-2">
      <div className="flex justify-between px-8 border-b border-gray-300 items-center py-2 rounded-md">
        <span className="text-[16px]  text-text">Select Book</span>
        <div className="flex gap-2 justify-center items-center">
          <input
            type="text"
            className="text-text outline-none  bg-[#F3F3F3] px-3 py-1 text-[14px] rounded-md"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleClear}
            className="outline-none py-1 px-3 rounded-md bg-background  text-accent text-[14px] "
          >
            <span>Clear</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-evenly gap-8 py-6 px-10 w-full h-full">
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-2 justify-start items-center">
            <span className="text-[16px] text-slate-400">BookId:</span>
            <span className="text-[16px] text-primary">
              {filteredBook.length > 0 ? filteredBook[0].bookId : ""}
            </span>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <span className="text-[16px] text-slate-400">Author:</span>
            <span className="text-[16px] text-primary">
              {" "}
              {filteredBook.length > 0 ? filteredBook[0].author : ""}
            </span>
          </div>
        </div>

        <div className="flex w-full justify-between items-center">
          <div className="flex gap-2 justify-start items-center">
            <span className="text-[16px] text-slate-400">Title:</span>
            <span className="text-[16px] text-primary">
              {" "}
              {filteredBook.length > 0 ? filteredBook[0].title : ""}
            </span>
          </div>

          <div className="flex gap-2 justify-start items-center">
            <span className="text-[16px] text-slate-400">Count:</span>
            <span className="text-[16px] text-primary">
              {" "}
              {filteredBook.length > 0 ? filteredBook[0].count : ""}
            </span>
          </div>
        </div>
        <div className="flex w-full  justify-end items-center gap-8">
          <button
            onClick={handleSelect}
            className="outline-none py-1 px-3 rounded-sm bg-primary text-secondary"
          >
            <span>Select</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectBooks;
