import React from "react";

const DisplayAccount = (props) => {
  let { user } = props;
  return (
    <div>
      <h1>{user.profileObj.name}</h1>
      <img src={user.profileObj.imageUrl} alt="profile-pic" />
    </div>
  );
};

export default DisplayAccount;
