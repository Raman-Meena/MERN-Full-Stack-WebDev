import React, { useState } from "react";
import UserSideBar from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/userOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransactions from "../../components/userDashboard/UserTransactions";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex w-full h-[89.58vh]">
      <div
        className={`bg-(--color-background) transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <UserSideBar
          active={active}
          setActive={setActive}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>

      <div className="flex-1">
        {active === "overview" && <UserOverview />}
        {active === "profile" && <UserProfile />}
        {active === "orders" && <UserOrders />}
        {active === "transactions" && <UserTransactions />}
        {active === "helpdesk" && <UserHelpDesk />}
      </div>
    </div>
  );
};

export default UserDashboard;
