import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  useGetUsersQuery,
  useCreateUserMutation,
} from "../store/services/apiSlice";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [openAuth, setOpenAuth] = useState(false);
  const [authMode, setAuthMode] = useState("");
  const [showLogout, setShowLogout] = useState(false);

  const { data: users = [] } = useGetUsersQuery();
  const [createUser] = useCreateUserMutation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  const updateUserCtx = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const signup = async (data) => {
    const exists = users.find((u) => u.email === data.email);

    if (exists) {
      alert("User already exists");
      throw new Error("User already exists");
    }

    const newUser = await createUser(data).unwrap();

    localStorage.setItem("token", "dummy-token");
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = async (data) => {
    const exists = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (!exists) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("token", "dummy-token");
    localStorage.setItem("user", JSON.stringify(exists));
    setUser(exists);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  if (loading) return null;

  const values = {
    user,
    updateUserCtx,
    login,
    logout,
    signup,
    openAuth,
    setOpenAuth,
    authMode,
    setAuthMode,
    showLogout,
    setShowLogout,
  };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
