import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchData } from "../Services/User.services";
import Header from "../component/Header";

function Homepage() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  function handleLogout() {
    localStorage.removeItem("token");
    toast.success("Logged out succesfully !");
    navigate("/login");
  }

  async function loadUserData() {
    const user = await fetchData();
    setUser(user);
  }

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    console.log("user state change", user);
  }, [user]);
  return (
    <>
      {/* <h1
        style={{
          backgroundColor: "blue",
          textAlign: "center",
          margin: 0,
          color: "white",
        }}
      >
        Welcome to Homepage
      </h1> */}
      {/* <p style={{ textAlign: "center", fontSize: "20px" }}>
        you have already logged in
      </p> */}
      <Header user={user} />
      <br></br>
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: "lightblue",
          color: "white",
          borderRadius: "5px",
          padding: "9px 22px",
          margin: "300px",
          cursor: "pointer",
          border: "none",
        }}
      >
        Log out
      </button>
    </>
  );
}

export default Homepage;
