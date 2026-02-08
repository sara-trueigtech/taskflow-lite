import React from "react";
import { useOutletContext } from "react-router-dom";
import AuthModal from "../Login/component";

const Home = () => {
  return (
    <>
      <div className="p-10 bg-bgColor2 min-h-screen">
        <h2 className="text-3xl font-bold text-white">
          Welcome to Task Flow Lite
        </h2>
      </div>

      <AuthModal/>
    </>
  );
};

export default Home