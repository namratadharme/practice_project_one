import React from "react";

function UserInfo(props) {
  return (
    <>
      <div className="user_informationcard">
        <p>
          Name:-{props.user.fname} {props.user.lname}
        </p>
        <p>Email:- {props.user.email}</p>
      </div>
    </>
  );
}

export default UserInfo;
