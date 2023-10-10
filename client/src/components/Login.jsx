import { RiAdminLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { adminlogin } from "../config.js";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const formSubmit = (data, e) => {
    const status = adminlogin(data.username, data.password);
    if (!status) {
      toast.error("Login Failed", {
        duration: 500,
      });
      return;
    }
    toast.success("Login Successful", {
      duration: 500,
    });
    e.target.reset();
  };
  return (
    <div className="w-full h-full justify-center  items-center  flex px-32">
      <div className="flex flex-col gap-4  p-8 bg-secondary  rounded-md w-[400px] h-auto">
        <div className="flex justify-start items-center gap-4">
          <RiAdminLine className="text-primary text-[25px]" />
          <p className="text-[25px] text-accent">Admin Login</p>
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
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
          <button className="bg-primary py-1 px-4  w-fit rounded-md outline-none text-[18px] text-secondary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
