/*
 * Add new student
 * Post request
 */

import Student from "../models/studentModel.js";

const addStudent = async (req, res) => {
  try {
    const { name, email, enrollment_number, branch, semester, phone } =
      req.body;

    const student = await Student.create({
      name,
      email,
      enrollment_number,
      branch,
      phone,
      semester,
    });

    res.status(201).json({
      _id: student._id,
      name: student.name,
      email: student.email,
      phone: student.phone,
      enrollment_number: student.enrollment_number,
      branch: student.branch,
      semester: student.semester,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*
 * Get all students
 * Get request
 */

const getStudents = async (req, res) => {
  try {
    const students = await Student.find(
      {},
      "name  email enrollment_number  branch semester  phone"
    );

    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*
 * Get student by id
 * Get request
 */

const getStudentById = async (req, res) => {
  try {
    const { ENo } = req.params;
    const student = await Student.findOne(
      { enrollment_number: ENo },
      "name email enrollment_number branch semester phone"
    );

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*
 *Update student by id
 *Put request
 */

const updateStudentById = async (req, res) => {
  try {
    const { _id } = req.params;
    const { email, branch, semester, phone } = req.body;

    const student = await Student.findById(_id);

    if (student) {
      student.email = email || student.email;
      student.branch = branch || student.branch;
      student.semester = semester || student.semester;
      student.phone = phone || student.phone;
    }

    await student.save();

    res.status(201).json({
      _id: student._id,
      name: student.name,
      email: student.email,
      enrollment_number: student.enrollment_number,
      phone: student.phone,
      branch: student.branch,
      semester: student.semester,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*
 *Delete student by id
 *Delete request
 */

const deleteStudentById = async (req, res) => {
  try {
    const { _id } = req.params;

    const student = await Student.findByIdAndDelete(_id);

    if (student) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  addStudent,
  getStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};
