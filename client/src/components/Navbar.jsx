import { useContext } from "react";
import icon from "../assets/icon.png";
import { Context } from "../App";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const { isLogin, setIsLogin } = useContext(Context);
  const handleLogout = () => {
    setIsLogin(false);
    Cookies.remove("logedIn");
  };
  return (
    <nav className="bg-background fixed w-full h-[50px]  py-2 px-20 flex justify-between items-center border-b-2 border-secondary">
      <div className="flex gap-2 justify-center items-center">
        <img className="w-[20px] h-[20px]" src={icon} alt="" />
        <p className="text-[18px]">
          <span className="text-[rgb(231,107,111)]">Book</span>
          <span className="text-[rgb(121,167,231)]">Wise</span>
        </p>
      </div>

      {isLogin && (
        <div className="flex gap-10 justify-evenly items-center">
          <NavLink
            to="dashboard"
            className={({ isActive }) => {
              return isActive ? "text-primary" : "text-accent";
            }}
          >
            <p className="group">
              <span className="text-[18px] group">Dashboard</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-accent"></span>
            </p>
          </NavLink>

          <NavLink
            to="students"
            className={({ isActive }) => {
              return isActive ? "text-primary" : "text-accent";
            }}
          >
            <p className="group">
              <span className="text-[18px] group">Students</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-accent"></span>
            </p>
          </NavLink>

          <NavLink
            to="books"
            className={({ isActive }) => {
              return isActive ? "text-primary" : "text-accent";
            }}
          >
            <p className="group">
              <span className="text-[18px] group">Books</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-accent"></span>
            </p>
          </NavLink>

          <button className="py-1 px-3 outline-none " onClick={handleLogout}>
            <p className="group">
              <span className="text-[18px] text-accent group">Logout</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-accent"></span>
            </p>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
