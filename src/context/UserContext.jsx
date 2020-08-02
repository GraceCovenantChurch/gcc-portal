import React, { Component } from "react";
import { useGoogleLogin } from "react-google-login";

import { user, INITIAL_USER_DATA } from "common/user";

const UserContext = React.createContext();

class UserContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: INITIAL_USER_DATA,
      authState: false,
      login: (value) => this.login(value),
      logout: () => this.logout(),
    };
  }

  componentDidMount() {
    let user = sessionStorage.getItem("userData");

    if (user && !this.state.authState) {
      this.login(JSON.parse(user));
    } else if (!user && this.state.authState) {
      this.logout();
    }
  }

  login = (value) => {
    sessionStorage.setItem("userData", JSON.stringify(value));
    this.setState({ authState: true, user: value });
  };

  logout = () => {
    this.setState({ authState: false, user: INITIAL_USER_DATA });
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserContextConsumer = UserContext.Consumer;

export { UserContextProvider, UserContextConsumer };
export default UserContext;
