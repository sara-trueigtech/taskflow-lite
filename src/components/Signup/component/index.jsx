import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import CommonFormController from "../../../common/commonFormController";
import useSignup from "../hooks/useSignup";
import AuthLayout from "../../../common/commonAuthLayout";

const Signup = ({ open = false, onClose = () => {}, openLogin = () => {} }) => {
  const { control, handleSubmit } = useForm();
  const { handleSignup, loading, SIGNUP_FORM_CONTROLLER } = useSignup(onClose);
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
      <AuthLayout open={open} onClose={onClose}>
        <div className="w-1/2 flex items-center justify-center text-white">
        <div className="w-[28rem] h-[38rem] flex flex-col items-center justify-center">
          <h2 className="font-semibold text-[1.72rem] mb-10">SignUp</h2>

          <div className="flex items-center gap-4 mb-10 w-full">
              <span className="flex-1 h-px w-full bg-textColor"></span>
              <p className="font-semibold text-base text-white">
                SignUp with email
              </p>
              <span className="flex-1 h-px w-full bg-textColor"></span>
            </div>

          <form onSubmit={handleSubmit(handleSignup)}>
            <div className="flex flex-col gap-3">
            <CommonFormController
              controls={SIGNUP_FORM_CONTROLLER}
              control={control}
            />
            </div>

            <p className="mt-[2.5rem]">I confirm that I am 18 years or older and legally allowed to participate in online gaming.</p>

            <button type="submit" disabled={loading} className="buttonStyle mt-[2.5rem]">
              {loading ? "Signing up..." : "Signup"}
            </button>

            <p className="text-center text-sm mt-4 ">
              Already have an account? <span onClick={openLogin} className="text-linkColor cursor-pointer hover:underline">Login</span>
            </p>
          </form>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Signup;
