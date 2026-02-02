import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import useLogin from "../Hooks/useLogin";
import CommonFormController from "../../../common/commonFormController";
import image from "../../../assets/image.png";

const Login = ({ open, onClose, openSignup }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleLogin, loading, LOGIN_FORM_CONTROLLER } = useLogin(onClose);

  const dialogRef = useRef(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return (
    <>
      <dialog
        ref={dialogRef}
        onClose={onClose}
        className=" backdrop:bg-black/60 rounded-xl p-0 text-textColor m-auto"
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            onClose();
          }
        }}
      >
        <div className="max-w-380 max-h-184 bg-bgColor rounded-2xl overflow-hidden flex border border-border">
          <div className="w-1/2">
            <img src={image} alt="login" className="object-cover" />
          </div>

          <div className="w-1/2 flex items-center justify-center">
            <div className="w-[28rem] h-[38rem] flex flex-col items-center justify-center">
              <div className="text-center">
                <h2 className="font-semibold text-[1.72rem] mb-10">Login</h2>

                <div className="w-[28rem] flex flex-col items-center justify-center">
                  <div className="flex items-center gap-4 mb-10 w-full">
                    <div className="flex-1 h-px bg-textColor"></div>

                    <p className="font-semibold text-[1rem]">
                      Login with email
                    </p>

                    <div className="flex-1 h-px bg-textColor"></div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="flex flex-col gap-7">
                  <CommonFormController
                    controls={LOGIN_FORM_CONTROLLER}
                    control={control}
                  />
                </div>

                <p className="mt-[0.64rem] text-center font-normal text-[1rem] underline cursor-pointer text-textColor ">
                  Forgot Your Password?
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn mt-28"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>

              <p className="text-center text-sm mt-4">
                Don&apos;t have an account?{" "}
                <span
                  onClick={openSignup}
                  className="text-link cursor-pointer hover:underline"
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Login;
