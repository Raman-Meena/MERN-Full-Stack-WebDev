import React, { useState, useEffect } from "react";
import UserSideBar from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/userOverview";
import UserProfile from "../../components/userDashboard/UserProfile"
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransactions from "../../components/userDashboard/UserTransactions";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const UserDashboard = () => {
  const { role, isLogin } = useAuth();
  const [active, setActive] = useState("overview");
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  });

  if (role !== "customer") {
    return (
      <>
        <div className="p-3">
          <div className="border rounded shadow p-5 w-4xl mx-auto text-center bg-gray-100">
            <div className="text-2xl font-bold">
              You are not logged in as Customer. Please Login again.
            </div>
          </div>
        </div>
      </>
    );
  }

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
