import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import CommonFormController from "../../../common/commonFormController";
import image from "../../../assets/image.png";
import { useAuth } from "../Hooks/useAuth";
import { AuthContext } from "../../../context/AuthContext";

const AuthModal = () => {
  const dialogRef = useRef(null);
  const { openAuth, setOpenAuth, authMode, setAuthMode } =
    useContext(AuthContext);

  const { control, handleSubmit } = useForm();
  
  const onClose = () => {
    setOpenAuth(false);
  };
  const { handleAuth, loading, controls } = useAuth(authMode, onClose);

  useEffect(() => {
    openAuth ? dialogRef.current?.showModal() : dialogRef.current?.close();
  }, [openAuth]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          onClose();
        }
      }}
      className="backdrop:bg-black/60 rounded-xl p-0 m-auto"
    >
      <div className="max-w-380 max-h-184 bg-bgColor rounded-xl flex border border-borderColor overflow-hidden">
        <div className="w-1/2">
          <img src={image} className="h-full object-cover" />
        </div>

        <div className="w-1/2 flex items-center justify-center text-white">
          <div className="w-[28rem] h-[38rem] flex flex-col justify-center">
            <h2 className="font-semibold text-[1.72rem] mb-10 text-center">
              {authMode === "login" ? "Login" : "Sign Up"}
            </h2>

            <div className="flex items-center gap-4 mb-10">
              <span className="flex-1 h-px bg-textColor"></span>
              <p className="font-semibold">
                {authMode === "login"
                  ? "Login with email"
                  : "Signup with email"}
              </p>
              <span className="flex-1 h-px bg-textColor"></span>
            </div>

            <form onSubmit={handleSubmit(handleAuth)}>
              <div className="flex flex-col gap-3">
                <CommonFormController controls={controls} control={control} />
              </div>


              <button
                type="submit"
                disabled={loading}
                className="buttonStyle mt-10 w-full cursor-pointer"
              >
                {loading
                  ? "Please wait..."
                  : authMode === "login"
                    ? "Login"
                    : "Signup"}
              </button>
            </form>

            <p className="text-center text-sm mt-4">
              {authMode === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
              <span
                onClick={() =>
                  setAuthMode(authMode === "login" ? "signup" : "login")
                }
                className="text-linkColor cursor-pointer hover:underline"
              >
                {authMode === "login" ? "Sign Up" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default AuthModal;
