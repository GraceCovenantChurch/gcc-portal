import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import Button from "@material-ui/core/Button";

import UserContext, { UserContextConsumer } from "context/UserContext";

class AuthButton extends Component {
  static contextType = UserContext;

  success = (response) => {
    this.context.login(response);
  };

  failure = (response) => {
    console.error(response.error);
  };

  logout = () => {
    this.context.logout();
  };

  render() {
    return (
      <UserContextConsumer>
        {({ user, authState }) => {
          if (authState) {
            return (
              <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Logout"
                render={(renderProps) => (
                  <Button color="inherit" onClick={renderProps.onClick}>
                    Logout
                  </Button>
                )}
                onLogoutSuccess={this.logout}
              />
            );
          } else {
            return (
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                onSuccess={this.success}
                onFailure={this.failure}
                hostedDomain="gracecovenant.net"
                render={(renderProps) => (
                  <Button color="inherit" onClick={renderProps.onClick}>
                    Login
                  </Button>
                )}
                accessType="offline"
                approvalPrompt="force"
                isSignedIn={true}
                prompt="select_account"
                theme="dark"
                cookiePolicy={"single_host_origin"}
              />
            );
          }
        }}
      </UserContextConsumer>
    );
  }
}

export default AuthButton;
