import React from "react";
import useLogout from "../hooks/useLogout";
import TaskBoard from "../../TaskBoard/component";

const Dashboard = () => {
  const { handleLogout } = useLogout();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          backgroundColor: "#fff",
          padding: "12px 16px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <h2 style={{ margin: 0, color: "#111827" }}>Task Dashboard</h2>

        <button
          onClick={handleLogout}
          style={{
            padding: "8px 14px",
            backgroundColor: "#dc2626",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <TaskBoard />
      </div>
    </div>
  );
};

export default Dashboard;
