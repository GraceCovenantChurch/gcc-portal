import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import LoginButton from "./auth/LoginButton";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarUtil: {
    marginLeft: 'auto'
  }
};

const INITIAL_STATE = {
  active: false
};

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={ classes.grow }>
            { process.env.REACT_APP_TITLE }
          </Typography>
          <div className={classes.toolbarUtil}>
          <LoginButton className="signin" color="inherit" />
          </div>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({}),
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(withStyles(styles)(NavigationBar));
