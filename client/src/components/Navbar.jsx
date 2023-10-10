import icon from "../assets/icon.png";
const Navbar = () => {
  return (
    <nav className=" fixed w-full h-[50px] border-b border-[#c5c5c5] py-2 px-32 flex justify-between items-center">
      <div className="flex gap-4 justify-center items-center">
        <img className="w-[25px] h-[25px]" src={icon} alt="" />
        <p className="text-[18px] text-text">BookWise</p>
      </div>

      <div>
        <button className="hover:border border-slate-300 rounded-md py-1 px-3 outline-none">
          <span className="text-[18px] text-text">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
