import React from 'react'
import { useOutletContext } from 'react-router-dom';
import Login from '../Login/component';

const Home = () => {
  const { openLogin, setOpenLogin } = useOutletContext();

  return (
    <>
      <div className="p-10">
        <h2 className="text-3xl font-bold">
          Welcome to Task Flow Lite
        </h2>
      </div>

      <Login
        open={openLogin}
        onClose={() => setOpenLogin(false)}
      />
    </>
  );
}

export default Home