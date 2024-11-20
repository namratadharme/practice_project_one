import React, { useEffect, useState } from "react";
import "../Style/userCard.css";
import UserInfo from "./UserInfo";

function Usercard(props) {
  const [isUserCardShow, setIsUserCardShow] = useState(false);

  function handleUserDetail() {
    setIsUserCardShow((isCardShow) => {
      return !isCardShow;
    });
  }
  useEffect(() => {
    console.log("is user card show", isUserCardShow);
  }, [isUserCardShow]);

  return (
    <>
      <div
        onClick={handleUserDetail}
        className={`user_card ${
          props.user.gender === "male" ? "user_male" : "user_female"
        }`}
      ></div>
      {isUserCardShow ? <UserInfo user={props.user} /> : null}
    </>
  );
}
export default Usercard;
