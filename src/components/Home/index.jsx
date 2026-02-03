import React from "react";
import { useOutletContext } from "react-router-dom";
import AuthModal from "../Login/component";

const Home = () => {
  const { openAuth, setOpenAuth, authMode, setAuthMode } = useOutletContext();

  return (
    <>
      <div className="p-10 bg-bgColor2 min-h-[calc(100vh-5.43rem)]">
        <h2 className="text-3xl font-bold text-white">
          Welcome to Task Flow Lite
        </h2>
      </div>

      <AuthModal
        open={openAuth}
        mode={authMode}
        onClose={() => setOpenAuth(false)}
        modeToggle={setAuthMode}
      />
    </>
  );
};

export default Home