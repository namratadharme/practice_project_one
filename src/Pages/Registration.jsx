import React from "react";
import { useState, useEffect } from "react";
import "../Style/registration.css";
import { userRegistration } from "../Services/User.services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [gender, setGender] = useState("male");
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

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handleselect_gender(e) {
    setGender(e.target.value);
  }
  async function handleSignup() {
    if (validation()) {
      try {
        setLoading(true);
        const reg = await userRegistration(
          email,
          password,
          confirmpassword,
          firstName,
          lastName,
          gender
        );
        console.log("Registration successful", reg);
        toast.success(reg.message);
        navigate("/login");
      } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
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
      <div className="container">
        <span className="userData">Name</span>
        {/* <div className="userNameField"> */}
        <input
          className="input1"
          type="text"
          placeholder="FirstName"
          onChange={handleFirstName}
        ></input>

        <input
          className="input1"
          type="text"
          placeholder="LastName"
          onChange={handleLastName}
        ></input>
        {/* </div> */}

        <span className="userData">Email</span>
        <input
          type="text"
          className="inputField"
          placeholder="Email"
          onChange={handleInput1}
        ></input>
        <span className="userData">Password</span>
        <input
          type="password"
          className="inputField"
          placeholder="Password"
          onChange={handleInput2}
        ></input>
        <span className="userData">Confirm Password</span>
        <input
          type="password"
          className="inputField"
          placeholder="Confirm Password"
          onChange={handleinput3}
        ></input>
        <span className="userData">Gender</span>
        <select
          className="selectOpn"
          id="gender"
          name="gender"
          value={gender}
          onChange={handleselect_gender}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <p className="para">{error ? error : ""}</p>
        <button className="button" onClick={handleSignup} disabled={!enable}>
          {loading ? "Loading..." : "Sign up"}
        </button>
      </div>
    </>
  );
}

export default Registration;
