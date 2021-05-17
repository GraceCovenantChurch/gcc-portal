import React from "react";

import Title from "components/pages/Title";
import Subtitle from "components/pages/Subtitle";

const Welcome = (props) => {
  let { profileObj } = props.user;

  return (
    <React.Fragment>
      <Title>GCC Portal</Title>
      <Subtitle>
        Welcome {profileObj.givenName} {profileObj.familyName} to Grace Covenant
        Church's internal portal page. If you have any questions or comments
        about the internal page, please reach out to web@gracecovenant.net
      </Subtitle>
    </React.Fragment>
  );
};

export default Welcome;
