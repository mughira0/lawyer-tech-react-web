import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom/dist";
import { toast } from "react-toastify";

const ProtectedRoute = ({ file, path }) => {
  const isLogin = useSelector((state) => state?.authReducer?.isLogin);

  if (isLogin) {
    return file;
  } else {
    toast.error("Please Login First");
    return <Navigate to="/login" replace />;
  }
  return <></>;
};

export default ProtectedRoute;
