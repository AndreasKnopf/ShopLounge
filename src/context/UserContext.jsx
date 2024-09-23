import React, { createContext, useState, useEffect } from "react";
import { users } from "../data/userData.js";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const saveLocalStorageUser = localStorage.getItem("loggedInUser");
    return saveLocalStorageUser ? JSON.parse(saveLocalStorageUser) : null;
  });

  useEffect(() => {
    setUserList(users);
  }, []);

  const loginUser = (email, password) => {
    const user = userList.find((u) => u.email === email && u.password === password);
    if (user) {
      setLoggedInUser(user);
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  };

  const logoutUser = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <UserContext.Provider value={{ userList, loggedInUser, loginUser, logoutUser }}>{children}</UserContext.Provider>
  );
};
