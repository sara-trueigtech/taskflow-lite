import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import useLogin from "../Hooks/useLogin";
import CommonFormController from "../../../common/commonFormController";
import AuthLayout from "../../../common/commonAuthLayout";

const Login = ({ open, onClose, openSignup }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleLogin, loading, LOGIN_FORM_CONTROLLER } = useLogin(onClose);

  return (
    <>
      <AuthLayout open={open} onClose={onClose}>
        <div className="w-1/2 flex items-center justify-center text-white">
          <div className="w-[28rem] h-[38rem] flex flex-col items-center justify-center">
            <h2 className="font-semibold text-[1.72rem] mb-10">Login</h2>

            <div className="flex items-center gap-4 mb-10 w-full">
              <span className="flex-1 h-px w-full bg-textColor"></span>
              <p className="font-semibold text-base text-white">
                Login with email
              </p>
              <span className="flex-1 h-px w-full bg-textColor"></span>
            </div>

            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="flex flex-col gap-3">
                <CommonFormController
                  controls={LOGIN_FORM_CONTROLLER}
                  control={control}
                />
              </div>

              <p className="mt-[0.64rem] text-center font-normal text-[1rem] underline cursor-pointer text-textColor ">
                Forgot Your Password?
              </p>

              <button type="submit" disabled={loading} className="buttonStyle mt-28">
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="text-center text-sm mt-4 ">
              Don&apos;t have an account?{" "}
              <span
                onClick={openSignup}
                className="text-linkColor cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
