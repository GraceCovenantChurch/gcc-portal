import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

const Menu = props => {
  let { classes } = props;

  return (
    <div>
      <Link to="/">
        <Button variant="contained" color="primary" className={classes.button}>
          Home
        </Button>
      </Link>
    </div>
  );
};

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);
