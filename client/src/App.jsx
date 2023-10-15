import { useState, createContext, useEffect } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Loading from "./components/utils/Loading";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
const Context = createContext();
import Cookies from "js-cookie";
import Books from "./components/book/Books";
import Students from "./components/student/Students";
import { getBooks, getStudents } from "./config";
const App = () => {
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(
    false || Cookies.get("logedIn") === "true"
  );
  const [students, setStudents] = useState([]);
  const [books, setBooks] = useState([]);

  const handleGetStudents = async () => {
    // setLoading(true);
    const data = await getStudents();
    data.reverse();
    setStudents(data);
    // setLoading(false);
  };

  const handleGetBooks = async () => {
    // setLoading(true);
    const data = await getBooks();
    data.reverse();
    setBooks(data);
    // setLoading(false);
  };

  useEffect(() => {
    handleGetBooks();
    handleGetStudents();
  }, []);

  return (
    <Context.Provider
      value={{
        setLoading,
        isLogin,
        setIsLogin,
        handleGetBooks,
        handleGetStudents,
        books,
        students,
      }}
    >
      <div className="w-screen h-screen">
        {loading && <Loading />}
        <Toaster />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={isLogin ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="/dashboard/*"
            element={isLogin ? <Dashboard /> : <Navigate to="/" />}
          />

          <Route
            path="/students"
            element={isLogin ? <Students /> : <Navigate to="/" />}
          />

          <Route
            path="/books"
            element={isLogin ? <Books /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Context.Provider>
  );
};

export { Context };
export default App;
