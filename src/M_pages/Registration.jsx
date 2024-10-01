import React from "react";
import { useState, useEffect } from "react";
import "../Style/registration.css";
import { userRegistration } from "../Services/User.services";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [enable, setEnable] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  function handleInput1(e) {
    setEmail(e.target.value);
  }
  function handleInput2(e) {
    setPassword(e.target.value);
  }
  function handleinput3(e) {
    setConfirmpassword(e.target.value);
  }
  async function handleSignup() {
    if (validation()) {
      try {
        setLoading(true);
        const reg = await userRegistration(email, password, confirmpassword);
        console.log("Registration successful", reg);
        navigate("/login");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
    }
  }
  function validation() {
    if (!email.includes("@")) {
      setError("email contain @ in this field");
      return false;
    }
    if (!email.includes(".")) {
      setError("email contain . in this field");
      return false;
    }
    if (password.length < 8) {
      setError("password contain atleast 8 digit");
      return false;
    }
    if (password !== confirmpassword) {
      setError("password does not match");
      return false;
    } else {
      setError("");
      return true;
    }
  }

  useEffect(() => {
    if (!email !== "" && password !== "" && confirmpassword !== "") {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [email, password, confirmpassword]);

  return (
    <>
      <div id="container">
        <span className="type">Email</span>
        <input
          type="text"
          className="inputField"
          placeholder="Email"
          onChange={handleInput1}
        ></input>
        <span className="type">Password</span>
        <input
          type="text"
          className="inputField"
          placeholder="Password"
          onChange={handleInput2}
        ></input>
        <span className="type">Confirm Password</span>
        <input
          type="text"
          className="inputField"
          placeholder="Confirm Password"
          onChange={handleinput3}
        ></input>
        <p className="para">{error ? error : ""}</p>
        <button className="button" onClick={handleSignup} disabled={!enable}>
          {loading ? "Loading..." : "Sign up"}
        </button>
      </div>
    </>
  );
}

export default Registration;
