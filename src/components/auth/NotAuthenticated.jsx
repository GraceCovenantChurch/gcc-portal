import React from "react";

import Subtitle from "components/pages/Subtitle";

const NotAuthenticated = () => {
  return (
    <Subtitle>
      Please log in with your GCC Google Account provided to you before viewing
      this page. If you are still having issues logging in, please contact
      web@gracecovenant.net.
    </Subtitle>
  );
};

export default NotAuthenticated;
