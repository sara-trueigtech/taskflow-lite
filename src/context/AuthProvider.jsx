import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUser, getUsers } from "../services/userApi";
import { Navigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (data) => {
    const users = await getUsers();

    const exists = users.find(
      (u) => u.email === data.email
    );

    if (exists) {
      alert("User already exists");
      throw new Error("User already exists");
    }

    const newUser = await createUser(data);

    localStorage.setItem("token", "dummy-token");
    setUser(newUser);
  };

   const login = async (data) => {
    const users = await getUsers();

    const exists = users.find(
      (u) =>
        u.email === data.email &&
        u.password === data.password
    );

    if (!exists) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("token", "dummy-token");
    setUser(exists);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
