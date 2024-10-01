import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  if (localStorage !== "token") {
    return <Navigate to="/login"></Navigate>;
  } else {
    return children;
  }
};

export default ProtectedRouter;
