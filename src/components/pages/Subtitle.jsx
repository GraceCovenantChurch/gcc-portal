import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const Subtitle = (props) => {
  return (
    <Typography variant="h5" align="center" color="textSecondary" paragraph>
      {props.children}
    </Typography>
  );
};

Subtitle.propTypes = {
  children: PropTypes.node,
};

export default Subtitle;
