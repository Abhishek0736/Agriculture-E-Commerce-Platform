import React from "react";
import { Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({ Children, endPoint, message }) => {
  const session_data = localStorage.getItem("session.data");
  if (session_data == null) {
    return <Navigate to={endPoint + "?" + message} replace />;
  }
  return <Outlet />;
};
export default ProtectedRoute;
