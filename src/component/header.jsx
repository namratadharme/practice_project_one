import React from "react";
import "../Style/header.css";
import UserCard from "./UserCard";

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="logo"></div>
      <div className="nav-bar"></div>
      <div className="search-bar"></div>
      <div className="user-card-container">
        {props.user ? <UserCard user={props.user} /> : <></>}
      </div>
    </div>
  );
};

export default Header;
