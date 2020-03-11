import React, { Component } from "react";

const UserContext = React.createContext();

class UserContextProvider extends Component {
  state = {
    user: {},
    isLoggedIn: false,
    setUser: value => this.setUser(value),
    clearUser: () => this.clearUser()
  };

  setUser = value => {
    this.setState({ user: value, isLoggedIn: true });
  };

  clearUser = () => {
    this.setState({ user: {}, isLoggedIn: false });
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
