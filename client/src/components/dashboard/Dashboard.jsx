/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, NavLink, Outlet, useNavigate } from "react-router-dom";
import AssignBooks from "./assign/AssignBooks";
import ReturnBook from "./return/ReturnBook";
import { useEffect } from "react";
import BorrowList from "./borrow/BorrowList";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard/");
  }, []);
  return (
    <div className="w-full h-full flex px-20 pt-[50px] dashboard ">
      <div className="w-full h-full flex flex-col">
        {/* Toggle Button */}
        <div className="fixe flex w-full h-fit py-2 justify-center items-center  text-accent">
          <NavLink
            className="border border-accent bg-[#f3f3f3]"
            to="/dashboard/"
          >
            <button className="py-3 px-6 outline-none ">
              <span className="text-[16px] ">Assign Books</span>
            </button>
          </NavLink>

          <NavLink className="border border-accent  bg-[#f3f3f3]" to="return">
            <button className="py-3 px-6 outline-none ">
              <span className="text-[16px] ">Return Books</span>
            </button>
          </NavLink>

          <NavLink className="border border-accent  bg-[#f3f3f3]" to="borrow">
            <button className="py-3 px-6 outline-none ">
              <span className="text-[16px] ">Borrowed List</span>
            </button>
          </NavLink>
        </div>

        {/* main  */}

        <Routes>
          <Route path="/" element={<AssignBooks />} />
          <Route path="return" element={<ReturnBook />} />
          <Route path="borrow" element={<BorrowList />} />
        </Routes>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
