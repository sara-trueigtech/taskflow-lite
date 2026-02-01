import React from 'react'
import { Navigate, Outlet, useOutletContext } from 'react-router-dom';

const ProtectedRoutes = () => {
    const token = localStorage.getItem("token");
    const outletContext = useOutletContext();
  return (
    token ? <Outlet context={outletContext}/> : <Navigate to = "/" replace />
  )
}

export default ProtectedRoutes