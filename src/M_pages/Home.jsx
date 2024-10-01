import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <>
      <h1
        style={{
          backgroundColor: "blue",
          textAlign: "center",
          margin: 0,
          color: "white",
        }}
      >
        Welcome to Homepage
      </h1>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        you have already logged in
      </p>
      <br></br>
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: "lightblue",
          borderRadius: "5px",
          padding: "9px 22px",
          display: "block",
          margin: "auto",
        }}
      >
        Log out
      </button>
    </>
  );
}

export default Homepage;
