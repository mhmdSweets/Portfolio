import React, { useEffect, useState } from "react";
import Style from "./BaseLayout.module.scss";
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

function BaseLayout() {
  // Pass children as props

  const [darkMode, setDarkMode] = useState(false);

  function handleToggleDarkMode() {
    let oppositeOfCurrentDarkMode = !darkMode;
    console.log(oppositeOfCurrentDarkMode);
    localStorage.setItem("darkMode", `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    let detectedDarkMode = eval(localStorage.getItem("darkMode"));

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem("darkMode", "false");
    }
  }, []);
  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path={"Portfolio/"} element={<Home />} />
            {/* <Route exact path={"/"} element={<Home />} /> */}
            <Route exact path={"Portfolio/about"} element={<About />} />
            {/* <Route exact path={"/about"} element={<About />} /> */}
          </Routes>
        </Grid>
        <Grid item>
          <Box
            component={"footer"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            py={"1.5rem"}
            sx={{ opacity: 0.7 }}
            width={"100%"}
          >
            <p>&copy; 2024</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BaseLayout;
