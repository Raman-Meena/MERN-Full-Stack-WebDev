import React from "react"
import {Link} from "react-router-dom"
import { IoHomeSharp } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="flex justify-between p-2 align-ite bg-amber-400">
        <h3 className="font-bold text-2xl">GlowMore</h3>
        <div className="flex gap-5 items-center">
           <Link to={"/"} className="font-bold hover:text-white flex gap-1 items-center"><IoHomeSharp />Home</Link>
           <Link to={"/about"} className="font-bold hover:text-white flex gap-1 items-center"><IoIosInformationCircle />About</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
