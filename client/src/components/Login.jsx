import { RiAdminLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { adminlogin } from "../config.js";
import { useState, useContext } from "react";
import { Context } from "../App.jsx";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
const Login = () => {
  const navigate = useNavigate();
  const { setLoading, setIsLogin } = useContext(Context);
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const formSubmit = async (data, e) => {
    setLoading(true);
    const status = await adminlogin(data.username, data.password);
    if (status) {
      setLoading(false);
      setIsLogin(true);
      Cookies.set("logedIn", "true", { expires: 7 });
      toast.success("Login Successful", {
        duration: 800,
      });
      e.target.reset();
      navigate("/dashboard", { replace: true });
    } else {
      setLoading(false);
      toast.error("Login Failed", {
        duration: 800,
      });
    }
  };
  return (
    <div className="w-full h-full flex px-32">
      <div className="w-1/2 h-full flex justify-center items-center px-6 ">
        <div className="w-full h-auto flex justify-start flex-col gap-4 ">
          <motion.span
            className="text-[80px] font-bold text-primary"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[80px] font-bold text-[rgb(231,107,111)]">
              U
            </span>
            nc
            <span className="text-[80px] font-bold text-accent">l</span>
            oc
            <span className="text-[80px] font-bold text-[rgb(121,167,231)]">
              k
            </span>
          </motion.span>
          <motion.p
            initial={{ x: -100, y: 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="text-[50px] font-bold text-[rgb(231,107,111)]">
              {" "}
              the
            </span>
            <span className="text-[50px] font-bold text-text"> world</span>
            <span className="text-[50px] font-bold text-[rgb(231,107,111)]">
              {" "}
              of
            </span>
          </motion.p>

          <motion.span
            className="text-[70px] font-bold text-accent"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {" "}
            Knnowledge ,
          </motion.span>

          <motion.p
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <span className="text-[50px] font-bold text-[rgb(121,167,231)]">
              One{" "}
            </span>
            <span className="text-[50px] font-bold text-primary">
              click at{" "}
            </span>
            <span className="text-[50px] font-bold text-[rgb(231,107,111)]">
              a Time
            </span>
          </motion.p>
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="flex flex-col gap-4  p-8 bg-[rgb(228,231,227,.9)]    rounded-md w-[400px] h-auto">
          <div className="flex justify-start items-center gap-4">
            <RiAdminLine className="text-primary text-[25px]" />
            <p className="text-[25px] text-primary">Admin Login</p>
          </div>
          <form
            onSubmit={handleSubmit(formSubmit)}
            className="flex flex-col gap-4"
          >
            <input
              className="bg-background outline-none text-primary text-[18px] p-2"
              type="text"
              placeholder="username"
              {...register("username", { required: true })}
            />
            <input
              className="bg-background outline-none text-primary text-[18px] p-2"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              {...register("password", { required: true })}
            />
            <div className="flex gap-2 p-2 w-fit ">
              <input
                className="cursor-pointer"
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <p className="text-accent">show password</p>
            </div>
            <button className="bg-primary py-1 px-4  w-fit rounded-md outline-none text-[18px] text-secondary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
