import React from "react";
import "../Style/header.css";
import UserCard from "./UserCard";

function Header(props) {
  return (
    <div className="header-container">
      <div className="logo"></div>
      <div className="nav-bar"></div>
      <div className="search-bar"></div>
      <div className="usercard-container">
        {props.user ? <UserCard user={props.user} /> : <></>}
      </div>
    </div>
  );
}

export default Header;
