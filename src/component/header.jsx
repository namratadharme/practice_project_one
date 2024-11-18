import React from "react";
import "../Style/header.css";
import Usercard from "./Usercard";

function Header(props) {
  return (
    <>
      <div id="headerContainer">
        <div className="logo">logo</div>
        <div className="nav-bar">nav-bar</div>
        <div className="search-bar">serach-bar</div>
        <div className="userCardContainer">
          {props.user ? <Usercard user={props.user} /> : <></>}
        </div>
      </div>
    </>
  );
}

export default Header;
