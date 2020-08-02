import React, { Component } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Chart from "./Chart";

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
});

const data = [
  createData("00:00", 0),
  createData("03:00", 300),
  createData("06:00", 600),
  createData("09:00", 800),
  createData("12:00", 1500),
  createData("15:00", 2000),
  createData("18:00", 2400),
  createData("21:00", 2400),
  createData("24:00", undefined),
];

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

class Dashboard extends Component {
  render() {
    let { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={fixedHeightPaper}>
            <Chart data={data} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
