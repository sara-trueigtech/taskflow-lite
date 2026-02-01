import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { PROFILE_MENU } from "../constant";
import useLogout from "../../Dashboard/hooks/useLogout";
import { Link } from "react-router-dom";

const Header = ({ onLoginClick, onSignupClick }) => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const { handleLogout } = useLogout();

  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">
        Task Flow Lite
      </h1>

      {!user ? (
        <div className="flex gap-4">
          <button className="text-gray-600 hover:text-black" onClick={onLoginClick}>
            Login
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800" onClick={onSignupClick}>
            Signup
          </button>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-100"
          >
            <span className="font-medium">
              {user.name || "Profile"}
            </span>
            <span className="text-sm">▼</span>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
              {PROFILE_MENU.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setOpen(false);
                    if (item.label === "Logout") handleLogout();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
