import React from "react";
import { Controller, useForm } from "react-hook-form";
import useLogin from "../Hooks/useLogin";
import FormField from "../../../common/commonFormField";
import CommonFormController from "../../../common/commonFormController";

const Login = () => {
  const { register, handleSubmit, control, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { handleLogin, loading, LOGIN_FORM_CONTROLLER } = useLogin();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit(handleLogin)}
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          width: "300px",
          borderRadius: "6px",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Login</h3>

        <CommonFormController
          controls={LOGIN_FORM_CONTROLLER}
          control={control}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            backgroundColor: loading ? "#a5b4fc" : "#4f46e5",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
          disabled={loading}
        >
          {loading ? "logging in..." : "login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
