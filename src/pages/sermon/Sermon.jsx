import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Title from "components/pages/Title";
import Subtitle from "components/pages/Subtitle";
import UploadButton from "components/buttons/UploadButton";
import Card from "components/card/Card";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
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

const Sermon = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Sermons</Title>
      <Subtitle>
        {
          "This page is to help support our Sermon application. Please do not upload if you do not know what you are uploading!"
        }
      </Subtitle>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <UploadButton />
        </Grid>
      </Grid>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container justify="center" spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              heading="Upload Sermons"
              description="You have a recording of an old sermon? Please upload it here!"
              image="https://www.volgacrc.org/editoruploads/images/FaithWebsites/church_mid_img1.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              heading="Archived Sermons"
              description="Help us listen to old sermons that need to be tagged with the right information!"
              image="https://wp-media.patheos.com/blogs/sites/40/2018/08/aaron-burden-169739.png"
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Sermon;
