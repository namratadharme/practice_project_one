import React from "react";
import "../Style/userCard.css";

function Usercard(props) {
  return (
    <>
      <div
        className={`userCard ${
          props.user.gender === "male" ? "user_male" : "user_female"
        }`}
      ></div>
    </>
  );
}
export default Usercard;
