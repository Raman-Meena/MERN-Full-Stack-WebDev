import React from "react";
import { FaStreetView, FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TbTransactionRupee } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const UserSideBar = ({ active, setActive, sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-3 p-4 font-bold text-lg overflow-hidden">
        <GiHamburgerMenu
          size={22}
          className="cursor-pointer shrink-0 hover:scale-110"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <span
          className={`whitespace-nowrap overflow-hidden transition-opacity duration-200 ${
            sidebarOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          User Dashboard
        </span>
      </div>

      <hr />

      <div className="flex flex-col gap-2 p-3 font-bold">
        <SidebarItem
          icon={<FaStreetView />}
          label="Overview"
          name="overview"
          active={active}
          sidebarOpen={sidebarOpen}
          setActive={setActive}
        />
        <SidebarItem
          icon={<CgProfile />}
          label="Profile"
          name="profile"
          active={active}
          sidebarOpen={sidebarOpen}
          setActive={setActive}
        />
        <SidebarItem
          icon={<FaShoppingCart />}
          label="Orders"
          name="orders"
          active={active}
          sidebarOpen={sidebarOpen}
          setActive={setActive}
        />
        <SidebarItem
          icon={<TbTransactionRupee />}
          label="Transactions"
          name="transactions"
          active={active}
          sidebarOpen={sidebarOpen}
          setActive={setActive}
        />
        <SidebarItem
          icon={<RiCustomerServiceFill />}
          label="Help Desk"
          name="helpdesk"
          active={active}
          sidebarOpen={sidebarOpen}
          setActive={setActive}
        />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, name, active, sidebarOpen, setActive }) => {
  return (
    <button
      onClick={() => setActive(name)}
      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
        active === name
          ? "bg-(--color-secondary) text-white"
          : "hover:bg-gray-100/70"
      }`}
    >
      <span className="text-lg">{icon}</span>
      {sidebarOpen && <span>{label}</span>}
    </button>
  );
};

export default UserSideBar;
