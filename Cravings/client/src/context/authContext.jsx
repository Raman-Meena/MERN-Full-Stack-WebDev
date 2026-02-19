/* eslint-disable react-refresh/only-export-components */
import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [userState, setUserState] = useState(
    JSON.parse(sessionStorage.getItem("CravingUser")) || null,
  );
  const [isLogin, setIsLogin] = useState(!!userState);
  const [role, setRole] = useState(userState?.role || "");

  const setUser = (nextValue) => {
    setUserState((prevUser) => {
      const nextUser =
        typeof nextValue === "function" ? nextValue(prevUser) : nextValue;

      if (nextUser) {
        sessionStorage.setItem("CravingUser", JSON.stringify(nextUser));
      } else {
        sessionStorage.removeItem("CravingUser");
      }

      setIsLogin(!!nextUser);
      setRole(nextUser?.role || "");
      return nextUser;
    });
  };

  const value = { user: userState, setUser, isLogin, setIsLogin, role, setRole };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
