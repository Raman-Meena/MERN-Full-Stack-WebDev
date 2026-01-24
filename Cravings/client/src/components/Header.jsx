import React from "react";
import CravingsLogo from "../assets/CravingsLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, isLogin } = useAuth();

  const navigate = useNavigate();

  const handleNavigate = () => {
    switch (role) {
      case "manager": {
        navigate("/restaurant-dashboard");
        break;
      }
      case "partner": {
        navigate("/rider-dashboard");
        break;
      }
      case "customer": {
        navigate("/user-dashboard");
        break;
      }

      default:
        break;
    }
  };

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
            <div
              className="font-bold text-orange-600 text-xl cursor-pointer"
              onClick={() => navigate("/user-dashboard")}
            >
              Hello, {user.fullName}
            </div>
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
