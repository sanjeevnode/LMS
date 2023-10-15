/* eslint-disable no-unused-vars */
import axios from "axios";

const API_URL = "http://localhost:5000/api";
/*
 *Admin Routes
 */
export const adminlogin = async (username, password) => {
  try {
    await axios.post(`${API_URL}/admin/login`, {
      username,
      password,
    });
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

/*
 *Student Routes
 */

export const addStudent = async (student) => {
  try {
    await axios.post(`${API_URL}/student/add`, student);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const getStudents = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/student`);
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const deleteStudent = async (id) => {
  try {
    await axios.delete(`${API_URL}/student/${id}`);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const updateStudent = async (id, student) => {
  try {
    await axios.put(`${API_URL}/student/${id}`, student);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

/*
 *Books Routes
 */

export const addBook = async (student) => {
  try {
    await axios.post(`${API_URL}/book/add`, student);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const getBooks = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/book`);
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const deleteBook = async (id) => {
  try {
    await axios.delete(`${API_URL}/book/${id}`);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const updateBook = async (id, student) => {
  try {
    await axios.put(`${API_URL}/book/${id}`, student);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

/*
 *Borrow Routes
 */

export const borrowBook = async (student, books) => {
  try {
    const { data } = await axios.post(`${API_URL}/borrow`, {
      student,
      books,
    });
    return data;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const getBorrowedBooks = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/borrow`);
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const getBorrowStudent = async (Id) => {
  try {
    const { data } = await axios.get(`${API_URL}/borrow/${Id}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return {};
  }
};

export const returnBook = async (studentId, bookId) => {
  try {
    await axios.delete(`${API_URL}/borrow/${studentId}/${bookId}`);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const returnAllBooks = async (studentId) => {
  try {
    await axios.delete(`${API_URL}/borrow/${studentId}`);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
