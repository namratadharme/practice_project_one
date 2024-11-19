import React, { useEffect, useState } from "react";
import "../Style/userCard.css";

function Usercard(props) {
  const [isUserCardShow, setIsUserCardShow] = useState(false);

  const userDetail = props.user;

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
      {isUserCardShow ? (
        <div className="user_informationcard">
          <p>
            Name:-{userDetail.fname}
            {userDetail.lname}
          </p>
          <p>Email:- {userDetail.email}</p>
        </div>
      ) : null}
    </>
  );
}
export default Usercard;
