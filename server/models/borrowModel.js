import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
  student: {
    type: Object,
    required: true,
  },
  books: {
    type: Array,
    default: [],
  },
  borrowDate: {
    type: String,
    required: true,
  },
  returnDate: {
    type: String,
    required: true,
  },
});

const Borrow = mongoose.model("borrow", borrowSchema);

export default Borrow;
