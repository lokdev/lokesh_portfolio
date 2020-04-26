import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions,
} from "@material-ui/core";
import Navbar from "./Navbar";
import resume from "../images/resume.jpg";
import covid19 from "../images/covid19.png";
import ParticlesDesign from "./ParticlesDesign";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Gitprojects = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <ParticlesDesign />
      <Grid container justify="center">
        {/*Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={resume}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  My Resume
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Created my resume to view my resume in webpage
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/lokdev/MyResume"
                >
                  Git Project Link
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://lokdev.github.io/MyResume/"
                >
                Live Demo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>

        {/*Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Covid 19 tracker"
                height="140"
                image={covid19}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Covid 19 tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  To track covid19 internation cases, data will be fetched from rest api to bring live data.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="https://github.com/lokdev/covid19tracker">
                Git Project Link
                </Button>
                <Button size="small" color="primary" href="https://lokdev.github.io/covid19tracker/">
                  Live Demo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Gitprojects;
