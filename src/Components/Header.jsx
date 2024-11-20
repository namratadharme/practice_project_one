import React from "react";
import "../Style/header.css";
import UserCard from "./UserCard";
import SearchBar from "./Search";

function Header(props) {
  return (
    <div className="header-container">
      <div className="logo"></div>
      <div className="nav-bar"></div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="usercard-container">
        {props.user ? <UserCard user={props.user} /> : <></>}
      </div>
    </div>
  );
}

export default Header;
