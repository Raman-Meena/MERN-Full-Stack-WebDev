import React from "react";
import { FaStreetView } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { TbTransactionRupee } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const UserSideBar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold text-center flex gap-3 items-center">
          <GiHamburgerMenu />
          User Dashboard
        </div>
        <hr />

        <div className="grid gap-3 p-6 font-bold">
          <button
            className={`flex gap-3 items-center cursor-pointer p-3 rounded-xl ${
              active === "overview"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("overview")}
          >
            <FaStreetView />
            Overview
          </button>
          <button
            className={`flex gap-3 items-center cursor-pointer p-3 rounded-xl ${
              active === "profile"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("profile")}
          >
            <CgProfile />
            Profile
          </button>
          <button
            className={`flex gap-3 items-center cursor-pointer p-3 rounded-xl ${
              active === "orders"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("orders")}
          >
            <FaShoppingCart />
            Orders
          </button>
          <button
            className={`flex gap-3 items-center cursor-pointer p-3 rounded-xl ${
              active === "transactions"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("transactions")}
          >
            <TbTransactionRupee />
            Transactions
          </button>
          <button
            className={`flex gap-3 items-center cursor-pointer p-3 rounded-xl ${
              active === "helpdesk"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("helpdesk")}
          >
            <RiCustomerServiceFill />
            Help Desk
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
