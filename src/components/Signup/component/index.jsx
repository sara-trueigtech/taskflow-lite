import React from "react";
import { useForm } from "react-hook-form";
import CommonFormController from "../../../common/commonFormController";
import useSignup from "../hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = () => {
  const { control, handleSubmit } = useForm();
  const { handleSignup, loading, SIGNUP_FORM_CONTROLLER } = useSignup();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit(handleSignup)}
        style={{
          width: "340px",
          padding: "24px",
          background: "#f0f3ff",
          borderRadius: "10px",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#1f2937",
            fontSize: "20px",
          }}
        >
          Create Account
        </h3>

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
            marginTop: "16px",
            background: loading ? "#86efac" : "#16a34a",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "500",
          }}
        >
          {loading ? "Signing up..." : "Signup"}
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "14px",
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          Already have an account?{" "}
          <Link to="/login">
          <span
            style={{
              color: "#4f46e5",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Login
          </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
