import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    bookId: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("book", bookSchema);

export default Book;
