import express from "express";
import {
  borrowBook,
  getBorrowList,
  getBorrowStudent,
  returnBook,
  returnAllBooks,
} from "../controllers/borrowController.js";

const router = express.Router();

router.post("/", borrowBook);
router.get("/", getBorrowList);
router.get("/:Id", getBorrowStudent);
router.delete("/:studentId/:bookId", returnBook);
router.delete("/:studentId", returnAllBooks);
export default router;
