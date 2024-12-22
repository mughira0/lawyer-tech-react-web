import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom/dist";

const BeforeLoginRoute = ({ file }) => {
  const isLogin = useSelector((state) => state?.authReducer?.isLogin);
  console.log(isLogin);

  if (isLogin) {
    return <Navigate to={"/courses"} replace />;
  } else {
    return file;
  }
  return <></>;
};

export default BeforeLoginRoute;
