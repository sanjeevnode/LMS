import express from "express";
import {
  addStudent,
  getStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
} from "../controllers/studentControllers.js";

const router = express.Router();

router.post("/add", addStudent);
router.get("/", getStudents);
router.get("/:ENo", getStudentById);
router.put("/:_id", updateStudentById);
router.delete("/:_id", deleteStudentById);

export default router;
