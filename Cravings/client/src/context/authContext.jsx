import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("CravingUser")) || null,
  );
  const [isLogin, setIsLogin] = useState(!!user);
  const [role, setRole] = useState(user?.role || "");

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("CravingUser", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("CravingUser");
    }

    setIsLogin(!!user);
    setRole(user?.role || "");
  }, [user]);

  const value = { user, setUser, isLogin, setIsLogin, role, setRole };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
