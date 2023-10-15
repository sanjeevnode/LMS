/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { addBook, updateBook } from "../../config";

const AddBook = ({ handleGetBooks, currentBook, edit, setCurrentBook }) => {
  const { register, handleSubmit } = useForm();
  const formSubmit = async (data, e) => {
    if (edit.current) {
      const status = await updateBook(currentBook._id, data);
      if (status) {
        handleGetBooks();
        toast.success("Book updated successfully", {
          duration: 500,
        });
        setCurrentBook({
          title: "",
          bookId: "",
          name: "",
          price: "",
          category: "",
          count: "",
        });
        e.target.reset();
        edit.current = false;
      } else {
        edit.current = false;
        toast.error("Something went wrong");
      }
    } else {
      const status = await addBook(data);
      if (status) {
        handleGetBooks();
        e.target.reset();
      } else {
        toast.error("Something went wrong");
      }
    }
  };
  const hanndleReset = () => {
    edit.current = false;
    setCurrentBook({
      title: "",
      bookId: "",
      name: "",
      price: "",
      category: "",
      count: "",
    });
  };

  return (
    <>
      <div className="absolute bottom-5 right-6 z-10">
        <button
          onClick={hanndleReset}
          className=" text-accent text-[12px] py-2 px-4 hover:underline  hover:text-text"
        >
          Reset
        </button>
      </div>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className=" relative w-full flex flex-col gap-4 justify-center p-4 bg-secondary rounded-sm"
      >
        <div className="flex flex-col ">
          <label htmlFor="bookId" className="text-[12px] text-accent">
            Book Id*
          </label>
          <input
            disabled={edit.current}
            type="text"
            className="outline-none text-[15px] text-text p-2 bg-[#f3f3f3] rounded-sm"
            {...register("bookId")}
            defaultValue={currentBook.bookId}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="title" className="text-[12px] text-accent">
            Title*
          </label>
          <input
            disabled={edit.current}
            type="text"
            className="outline-none text-[15px] text-text p-2 bg-[#f3f3f3] rounded-sm"
            {...register("title")}
            defaultValue={currentBook.title}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="author" className="text-[12px] text-accent">
            Author*
          </label>
          <input
            disabled={edit.current}
            type="text"
            className="outline-none text-[15px] text-text p-2 bg-[#f3f3f3] rounded-sm"
            {...register("author")}
            defaultValue={currentBook.author}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="price" className="text-[12px] text-accent">
            Price*
          </label>
          <input
            type="text"
            className="outline-none text-[15px] text-text p-2 bg-[#f3f3f3] rounded-sm"
            {...register("price")}
            defaultValue={currentBook.price}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="category" className="text-[12px] text-accent">
            Category*
          </label>
          <input
            type="text"
            className="outline-none text-[15px] text-text p-2 bg-[#f3f3f3] rounded-sm"
            {...register("category")}
            defaultValue={currentBook.category}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="count" className="text-[12px] text-accent">
            Count*
          </label>
          <input
            type="text"
            className="outline-none text-[15px] text-text p-2 bg-[#f3f3f3] rounded-sm"
            {...register("count")}
            defaultValue={currentBook.count}
          />
        </div>

        <div className="flex justify-center ">
          <button className="bg-primary text-secondary text-[15px] py-2 px-4 rounded-sm">
            {edit.current ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddBook;
