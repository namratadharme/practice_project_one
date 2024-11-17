import React, { useState, useEffect } from "react";
import "../Style/user-card.css";

const UserCard = (props) => {
  const [isCardShown, setCardShown] = useState(false);

  function handleClick() {
    setCardShown((isShown) => {
      return !isShown;
    });
  }

  useEffect(() => {
    console.log("Is Card Shown", isCardShown);
  }, [isCardShown]);

  return (
    <>
      <div
        onClick={handleClick}
        className={`user-card ${
          props.user.gender === "male" ? "user-male" : "user-female"
        }`}
      ></div>
      {isCardShown ? (
        <div className="user-card-body">
          <p>
            Hello ! {props.user.fname} {props.user.lname}
          </p>
          <p>{props.user.email}</p>
        </div>
      ) : null}
    </>
  );
};

export default UserCard;
