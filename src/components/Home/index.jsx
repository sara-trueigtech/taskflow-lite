import React from 'react'
import { useOutletContext } from 'react-router-dom';
import Login from '../Login/component';
import Signup from '../Signup/component';

const Home = () => {
  const { openLogin, setOpenLogin, openSignup, setOpenSignup } = useOutletContext();

  return (
    <>
      <div className="p-10 bg-bgColor2 min-h-[calc(100vh-5.43rem)]">
        <h2 className="text-3xl font-bold text-white">
          Welcome to Task Flow Lite
        </h2>
      </div>

      <Login
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        openSignup={() => {
          setOpenLogin(false);
          setOpenSignup(true);
        }}
      />
      <Signup
        open={openSignup}
        onClose={() => setOpenSignup(false)}
        openLogin={() => {
          setOpenSignup(false);
          setOpenLogin(true);
        }}
      />
    </>
  );
}

export default Home