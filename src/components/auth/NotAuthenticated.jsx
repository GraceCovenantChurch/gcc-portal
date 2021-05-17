import React from "react";

import Subtitle from "components/pages/Subtitle";

import Typography from "@material-ui/core/Typography";

const NotAuthenticated = () => {
  return (
    <React.Fragment>
      <Typography variant="h4" align="center" color="secondary">
        You are not <b>Logged In!</b>
      </Typography>
      <Subtitle>
        Please log in with your GCC Google Account provided to you before
        viewing this page. If you are experiencing any issues logging in, please
        contact web@gracecovenant.net.
      </Subtitle>
    </React.Fragment>
  );
};

export default NotAuthenticated;
