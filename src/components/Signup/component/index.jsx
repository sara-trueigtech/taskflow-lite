import React from "react";
import { useForm } from "react-hook-form";
import CommonFormController from "../../../common/commonFormController";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const { control, handleSubmit } = useForm();
  const { handleSignup, loading, SIGNUP_FORM_CONTROLLER } = useSignup();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleSubmit(handleSignup)}
        style={{
          width: "320px",
          padding: "20px",
          background: "#fff",
          borderRadius: "6px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Signup</h3>

        <CommonFormController
          controls={SIGNUP_FORM_CONTROLLER}
          control={control}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "12px",
            background: "#16a34a",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
