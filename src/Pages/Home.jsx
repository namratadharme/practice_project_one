import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchData } from "../Services/User.services";
import Header from "../Components/Header";
import "../Style/home.css";

function Homepage() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  function handleLogout() {
    localStorage.removeItem("authToken");
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
      <Header user={user} />
      <br></br>
      <button className="logout-btn" onClick={handleLogout}>
        Log out
      </button>
    </>
  );
}

export default Homepage;
