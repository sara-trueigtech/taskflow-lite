import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { PROFILE_MENU } from "../constant";
import useLogout from "../../Dashboard/hooks/useLogout";
import { Link } from "react-router-dom";

const Header = ({ onLoginClick, onSignupClick, onProfileClick }) => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const { handleLogout } = useLogout();

  return (
    <header className="w-full bg-bgColor shadow-md px-6 py-4 flex justify-between items-center border border-borderColor2">
      <h1 className="text-xl font-semibold text-white">
        Task Flow Lite
      </h1>

      {!user ? (
        <div className="flex gap-4">
          <button className="text-white buttonStyle w-40 cursor-pointer" onClick={onLoginClick}>
            Login
          </button>
          <button className="text-white w-40 buttonStyle cursor-pointer" onClick={onSignupClick}>
            Signup
          </button>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="text-white w-40 buttonStyle cursor-pointer"
          >
            <span className="font-medium">
              {user.name || "Profile"}
            </span>
            <span className="text-sm"> ▼</span>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-bgColor text-white border border-borderColor2 rounded-md shadow-lg">
              {PROFILE_MENU.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setOpen(false);
                    if (item.label === "Logout") handleLogout();
                    if (item.label === "Profile") onProfileClick();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-inputColor cursor-pointer"
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
