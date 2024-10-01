import React, { useEffect, useState } from "react";
import "../Style/login.css";
import { userLogin } from "../Services/User.services";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  async function handleLogin() {
    if (validation()) {
      try {
        setLoading(true);
        const reg = await userLogin(email, password);
        console.log(reg);
        navigate("/home");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }

  function validation() {
    if (!email.includes("@")) {
      setError("email contain @");
      return false;
    }
    if (!email.includes(".")) {
      setError("email contain .");
      return false;
    }
    if (password.length < 8) {
      setError("password contain atleast 8 digit");
      return false;
    } else {
      setError("");
      return true;
    }
  }

  useEffect(() => {
    if (!email !== "" && password !== "") {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [email, password]);

  return (
    <>
      <div id="container">
        <label id="email">Email</label>
        <input
          type="email"
          id="email1"
          autoComplete="email"
          onChange={handleInput1}
          placeholder="Email"
        ></input>
        <label id="password">Password</label>
        <input
          type="password"
          id="password1"
          autoComplete="password"
          placeholder="Password"
          onChange={handleInput2}
        ></input>
        <p className="para">{error ? error : ""}</p>
        <button className="button" onClick={handleLogin} disabled={!enable}>
          {loading ? "Loading..." : "Log in"}
        </button>
      </div>
    </>
  );
}

export default Loginpage;
