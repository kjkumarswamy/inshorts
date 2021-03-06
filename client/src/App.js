import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Header from "./components/header/Header";
import InfoHeader from "./components/infoheader/InfoHeader";
import Articles from "./components/articles/Articles";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 110,
    width: "59%",
    margin: "0 auto",
  },
  [theme.breakpoints.down("md")]: {
    width: "75%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Box className={classes.container}>
        <InfoHeader />
        <Articles />
      </Box>
    </Box>
  );
};

export default App;
