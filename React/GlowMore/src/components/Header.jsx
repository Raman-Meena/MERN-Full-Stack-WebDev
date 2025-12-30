import React from "react"
import {Link} from "react-router-dom"
import { IoHomeSharp } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { TbLogin2 } from "react-icons/tb";
import { IoCreate } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="flex justify-between p-2 align-ite bg-amber-400">
        <h3 className="font-bold text-2xl">GlowMore</h3>
        <div className="flex gap-5 items-center">
           <Link to={"/"} className="font-bold hover:text-white flex gap-1 items-center"><IoHomeSharp />Home</Link>
           <Link to={"/about"} className="font-bold hover:text-white flex gap-1 items-center"><IoIosInformationCircle />About</Link>
           <Link to={"login"} className="font-bold hover:text-white flex gap-1 items-center"><TbLogin2 />Login</Link>
           <Link to={"/signup"} className="font-bold hover:text-white flex gap-1 items-center"><IoCreate />SignUp</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
