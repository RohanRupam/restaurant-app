import React from "react";
import { Typography, Grid } from "@mui/material";
import "./WelcomePage.css";
import PushPinRoundedIcon from "@mui/icons-material/PushPinRounded";
import QueryBuilderTwoToneIcon from "@mui/icons-material/QueryBuilderTwoTone";
import Footer from "../footer/Footer";
import Navbar from "../navbar/NavBar";
import { useTranslation } from "react-i18next";

const WelcomePage = () => {
  const { t } = useTranslation(["welcome", "common"]);
  return (
    <div className="welcome-container">
      <Navbar />
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={8}>
          <Typography
            fontFamily="Bartender SmCond Serif Pressed"
            sx={{ letterSpacing: 1, color: "#000000 " }}
            variant="h1"
            textAlign="center"
          >
            {t("common:taglinePart1")}
          </Typography>
          <Typography
            fontFamily="Bartender SmCond Serif Pressed"
            sx={{ letterSpacing: 1, color: "#c96700 " }}
            variant="h6"
            textAlign="center"
          >
            {t("common:taglinePart2")}
          </Typography>
          <Typography
            fontFamily="Bartender SmCond Serif Pressed"
            sx={{ letterSpacing: 1, color: "#c96700 " }}
            variant="h1"
            textAlign="center"
          >
            {t("common:taglinePart3")}
          </Typography>

          <Grid container my={2}>
            <Grid item xs={3} textAlign="end">
              <PushPinRoundedIcon sx={{ color: "#c96700 " }} />
            </Grid>
            <Grid item xs={9} sx={{ px: 2 }}>
              <Typography
                fontFamily="Bartender SmCond Serif Pressed"
                sx={{ color: "#c96700 " }}
                variant="h6"
              >
                {t("welcome:addressPart1")}
                <br />
                {t("welcome:addressPart2")}
                <br />
                {t("welcome:addressPart3")}
                <br />
                {t("welcome:addressPart4")}
                <br />
              </Typography>
            </Grid>
          </Grid>

          <Grid container my={2}>
            <Grid item xs={3} textAlign="end">
              <QueryBuilderTwoToneIcon sx={{ color: "#c96700 " }} />
            </Grid>
            <Grid item xs={9} sx={{ px: 2 }}>
              <Typography
                fontFamily="Bartender SmCond Serif Pressed"
                sx={{ color: "#c96700 " }}
                variant="h6"
              >
                <span style={{ color: "#c96700 " }}>
                  {t("welcome:tuesdayShort")}-{t("welcome:saturdayShort")}:
                </span>{" "}
                12PM-10PM
                <br />
                <span style={{ color: "#c96700 " }}>
                  {t("welcome:sunday")}:
                </span>{" "}
                10AM-11:30PM
                <br />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WelcomePage;
