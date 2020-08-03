import React, { Component } from "react";

const UserContext = React.createContext();

class UserContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      authState: false,
      login: (value) => this.login(value),
      logout: () => this.logout(),
    };
  }

  componentDidMount() {
    let user = localStorage.getItem("userData");

    if (user) {
      this.login(JSON.parse(user));
    } else {
      this.logout();
    }
  }

  login = (value) => {
    localStorage.setItem("userData", JSON.stringify(value));
    this.setState({ authState: true, user: value });
  };

  logout = () => {
    localStorage.removeItem("userData");
    this.setState({ authState: false, user: {} });
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
