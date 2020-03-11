import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import Button from "@material-ui/core/Button";

import UserContext from "context/UserContext";

class AuthButton extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      auth: true
    };
  }

  setAuth = () => {
    this.setState(prevState => ({ auth: !prevState.auth }));
  };

  success = response => {
    let user = response.profileObj;
    this.context.setUser(user);
    this.setAuth(false);
  };

  logout = () => {
    this.context.clearUser();
    this.setAuth(true);
  };

  render() {
    let { auth } = this.state;
    return (
      <div>
        {auth ? (
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            onSuccess={this.success}
            render={renderProps => (
              <Button color="inherit" onClick={renderProps.onClick}>
                Login
              </Button>
            )}
            offline={false}
            approvalPrompt="force"
            isSignedIn="isSignedIn"
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
            onLogoutSuccess={this.logout}
          />
        )}
      </div>
    );
  }
}

export default AuthButton;
