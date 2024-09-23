import React, { createContext, useState, useEffect } from "react";
import { users } from "../data/userData.js";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : users;
  });

  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedLocalStorageUser = localStorage.getItem("loggedInUser");
    return savedLocalStorageUser ? JSON.parse(savedLocalStorageUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userList));
  }, [userList]);

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

  const registerUser = (newUser) => {
    const existingUser = userList.find((u) => u.email === newUser.email);
    if (existingUser) {
      return false;
    }

    const nextId = userList.length > 0 ? Math.max(...userList.map((u) => u.id)) + 1 : 1;
    const userWithId = { ...newUser, id: nextId };

    const updatedUserList = [...userList, userWithId];
    setUserList(updatedUserList);
    setLoggedInUser(userWithId);
    localStorage.setItem("loggedInUser", JSON.stringify(userWithId));

    return true;
  };

  return (
    <UserContext.Provider value={{ userList, loggedInUser, loginUser, logoutUser, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
