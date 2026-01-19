import React from "react";
import CravingsLogo from "../assets/CravingsLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Header = () => {
  const { user, isLogin } = useAuth();

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-(--color-primary) px-4 py-2 flex justify-between items-center">
        <Link to={"/"}>
          <img src={CravingsLogo} alt="" className="h-15 w-30 object-cover" />
        </Link>
        <div className="flex gap-4">
          <Link
            to={"/"}
            className="text-decoration-none text-white hover:text-(--color-accent) font-bold"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-decoration-none text-white hover:text-(--color-accent) font-bold"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-decoration-none text-white hover:text-(--color-accent) font-bold"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-4">
          {isLogin ? (
            <span className="font-bold text-orange-600 text-xl">{user.fullName}</span>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-(--color-secondary) py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded "
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-(--color-secondary) py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded "
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
