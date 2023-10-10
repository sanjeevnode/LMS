import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
    required: true,
  },
  books: {
    type: Array,
    default: [],
  },
});

const Borrow = mongoose.model("borrow", borrowSchema);

export default Borrow;
