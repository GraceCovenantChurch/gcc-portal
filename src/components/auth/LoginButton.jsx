import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

const LoginButton = props => {
  let { className, color } = props;

  function _onClick(e) {
    console.log(process.env.REACT_APP_AUTH_URL);
    window.location.href = process.env.REACT_APP_AUTH_URL;
  }

  return (
    <Button onClick={_onClick} color={color} className={className}>
      Login
    </Button>
  );
};

LoginButton.propTypes = {
  className: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default LoginButton;
