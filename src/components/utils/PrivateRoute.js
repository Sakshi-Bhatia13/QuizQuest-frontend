import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isLogin = !!localStorage.getItem("authToken"); 

  return isLogin ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
