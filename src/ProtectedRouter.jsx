import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRouter = ({ children }) => {
  const token = localStorage.getItem("authToken");
  if (token == null) {
    return <Navigate to="/login"></Navigate>;
  } else {
    axios.defaults.headers.common["Authorization"] = token;
    return children;
  }
};

export default ProtectedRouter;
