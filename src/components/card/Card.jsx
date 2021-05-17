import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { default as MaterialCard } from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Card = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <MaterialCard className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={props.image}
          title={props.heading}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.heading}
          </Typography>
          <Typography>{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/dashboard">
            Click Here
          </Button>
        </CardActions>
      </MaterialCard>
    </React.Fragment>
  );
};

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
