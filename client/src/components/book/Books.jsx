import toast from "react-hot-toast";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../App";
import { deleteBook } from "../../config";
import BookList from "./BookList";
import AddBook from "./AddBook";
const Books = () => {
  // const [Books, setBooks] = useState([]);
  const { books, handleGetBooks } = useContext(Context);
  const [currentBook, setCurrentBook] = useState({
    title: "",
    bookId: "",
    author: "",
    price: "",
    category: "",
    count: "",
  });

  const [query, setQuery] = useState("");
  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.bookId.toLowerCase().includes(query.toLowerCase())
    );
  });

  const edit = useRef(false);

  // const handleGetBooks = async () => {
  //   setLoading(true);
  //   const data = await getBooks();
  //   data.reverse();
  //   setBooks(data);
  //   setLoading(false);
  // };

  const handleDeleteBook = async (id) => {
    const status = await deleteBook(id);
    if (status) {
      handleGetBooks();
    } else {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    handleGetBooks();
  }, []);

  return (
    <div className="w-full h-full pt-[50px] px-20 flex">
      <div className="flex  flex-col gap-4 w-[30%]  py-4 px-6 relative h-fit">
        <div className="bg-secondary flex justify-center items-center py-2 rounded-sm">
          <p className="text-text text-[20px]">
            {edit.current ? "Update Book" : "Add a new Book"}
          </p>
        </div>
        <AddBook
          handleGetBooks={handleGetBooks}
          currentBook={currentBook}
          edit={edit}
          setCurrentBook={setCurrentBook}
        />
      </div>
      <div className="flex gap-4  flex-col py-4 px-6 w-[70%] ">
        <div className="bg-secondary flex justify-between items-center  px-8 py-2 rounded-sm">
          <p className="text-text text-[20px]">Book List</p>

          <div className="flex gap-2 justify-center items-center">
            <p className="text-accent text-[16px]">Search</p>
            <input
              className="text-accent outline-none  bg-[#F3F3F3] px-2 py-1 text-[16px] rounded-sm"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full h-auto overflow-y-auto flex flex-col gap-2">
          <BookList
            books={filteredBooks}
            handleDeleteBook={handleDeleteBook}
            setCurrentBook={setCurrentBook}
            edit={edit}
          />
        </div>
      </div>
    </div>
  );
};

export default Books;
