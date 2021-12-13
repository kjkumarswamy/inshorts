import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#f44336",
    color: "#ffffff",
    height: 48,
    display: "flex",
    alignItems: "center",
    marginBottom: 30,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  text: {
    fontSize: 14,
    marginLeft: 50,
    fontWeight: 300,
  },
  logo: {
    height: 34,
    "&:last-child": {
      margin: "0 50px 0 20px",
    },
  },
}));

const InfoHeader = () => {
  const classes = useStyles();
  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";

  return (
    <Box className={classes.container}>
      <Typography className={classes.text}>
        For the best experience use <strong>inshorts</strong> app on your
        smartphone
      </Typography>
      <Box style={{ marginLeft: "auto" }}>
        <img src={appleStore} alt="appstore" className={classes.logo} />
        <img src={googleStore} alt="playstore" className={classes.logo} />
      </Box>
    </Box>
  );
};

export default InfoHeader;
