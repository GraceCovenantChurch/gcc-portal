import React from "react";

const DisplayAccount = (props) => {
  console.log(props);
  let { user } = props;
  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.imageUrl} alt="profile-pic" />
    </div>
  );
};

export default DisplayAccount;
