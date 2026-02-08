import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { PROFILE_MENU } from "../constant";
import useLogout from "../../Logout/hooks/useLogout";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ onLoginClick = () => {}, onSignupClick = () => {} }) => {
  const { user, setShowLogout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  // const { handleLogout } = useLogout();
  const nav = useNavigate();

  return (
    <header className="w-full bg-bgColor px-4 py-3 flex justify-between items-center sticky top-0 shadow-xl shadow-bgColor3">
      <h1 className=" flex text-xl font-semibold text-white">Task Flow Lite</h1>

      {!user ? (
        <div className="flex gap-4 w-full sm:w-auto">
          <button
            className="buttonStyle text-white cursor-pointer"
            onClick={onLoginClick}
          >
            Login
          </button>

          <button
            className="buttonStyle text-white cursor-pointer"
            onClick={onSignupClick}
          >
            Signup
          </button>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="buttonStyle text-white cursor-pointer"
          >
            {user.name || "Profile"} ▽
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-[10rem] bg-bgColor border border-borderColor2 rounded-md text-white">
              {PROFILE_MENU.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => {
                    setOpen(false);
                    if (item.label === "Logout") setShowLogout(true);
                    if (item.label === "Profile") nav("/profile");
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
