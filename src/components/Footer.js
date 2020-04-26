import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        href="https://www.linkedin.com/in/lokdev/"
        style={{ padding: 0 }}
        icon={<LinkedInIcon />}
        data-toggle="tooltip"
        data-placement="top"
        title="Linkedin"
      />

      <BottomNavigationAction
        className={classes.root}
        href="Lokesh_Dhanasekar_Resume.pdf"
        download
        style={{ padding: 0 }}
        icon={<GetAppIcon />}
        data-toggle="tooltip"
        data-placement="top"
        title="Download My Resume"
      />

      <BottomNavigationAction
        className={classes.root}
        href="mailto:dlokesh@outlook.com"
        style={{ padding: 0 }}
        icon={<MailIcon />}
        data-toggle="tooltip"
        data-placement="top"
        title="Mail to Lokesh"
      />
    </BottomNavigation>
  );
};

export default Footer;
