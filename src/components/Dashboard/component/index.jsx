import React from "react";
import useLogout from "../hooks/useLogout";
import TaskBoard from "../../TaskBoard/component";

const Dashboard = () => {
  const { handleLogout } = useLogout();

  return (
    <div
      
    >
      
      <div
        
      >
        <TaskBoard />
      </div>
    </div>
  );
};

export default Dashboard;
