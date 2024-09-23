import React, { createContext, useState, useEffect } from "react";
import { users } from "../data/userData.js";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(users);
  }, []);

  return <UserContext.Provider value={userList}>{children}</UserContext.Provider>;
};
