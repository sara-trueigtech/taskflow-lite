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
