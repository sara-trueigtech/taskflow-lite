import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { PROFILE_MENU } from "../constant";
import useLogout from "../../Dashboard/hooks/useLogout";
import { Link } from "react-router-dom";

const Header = ({ onLoginClick = () => {}, onSignupClick = () => {}, onProfileClick = () => {} }) => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const { handleLogout } = useLogout();

  return (
    <header className="w-full bg-bgColor px-6 py-4 flex justify-between items-center border border-borderColor2">
      <h1 className="text-xl font-semibold text-white">
        Task Flow Lite
      </h1>

      {!user ? (
        <div className="flex gap-4">
          <button
            className="buttonStyle w-40 text-white cursor-pointer"
            onClick={onLoginClick}
          >
            Login
          </button>

          <button
            className="buttonStyle w-40 text-white cursor-pointer"
            onClick={onSignupClick}
          >
            Signup
          </button>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="buttonStyle w-40"
          >
            {user.name || "Profile"} ▽
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-bgColor border border-borderColor2 rounded-md">
              {PROFILE_MENU.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setOpen(false);
                    if (item.label === "Logout") handleLogout();
                    if (item.label === "Profile") onProfileClick();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-inputColor"
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

export default Header