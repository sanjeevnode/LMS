import { useEffect, useState } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";

const Icon = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShow((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute bottom-0 right-0 w-auto h-auto p-2">
      {show && (
        <a
          href="https://site-sanjeev.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <HiOutlineInformationCircle className="text-[18px] text-accent cursor-pointer hover:text-[rgb(121,167,231)]" />
        </a>
      )}
    </div>
  );
};

export default Icon;
