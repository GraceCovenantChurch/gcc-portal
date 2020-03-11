import React, {useState} from "react";
import {GoogleLogin, GoogleLogout} from "react-google-login";

import Button from "@material-ui/core/Button";

const AuthButton = props => {
  const [auth, setAuth] = useState(true);

  const success = response => {
    setAuth(false);
  };

  const logout = () => {
    setAuth(true);
  };

  return (
    <div>
      {auth ? (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={success}
          render={renderProps => (
            <Button color="inherit" onClick={renderProps.onClick}>
              Login
            </Button>
          )}
          offline={false}
          approvalPrompt="force"
          responseType="id_token"
          isSignedIn
          theme="dark"
        >
          <span>Login Here</span>
        </GoogleLogin>
      ) : (
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Logout"
          render={renderProps => (
            <Button color="inherit" onClick={renderProps.onClick}>
              Logout
            </Button>
          )}
          onLogoutSuccess={logout}
        />
      )}
    </div>
  );
};

AuthButton.propTypes = {};

export default AuthButton;
