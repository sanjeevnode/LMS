import express from "express";
import {
  addBook,
  getBooks,
  updateBook,
  deleteBookById,
} from "../controllers/bookController.js";
const router = express.Router();

router.post("/add", addBook);
router.get("/", getBooks);
router.put("/:_id", updateBook);
router.delete("/:_id", deleteBookById);

export default router;
