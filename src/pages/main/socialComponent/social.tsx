import React from "react";
import { Grid } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { FamouseWords } from "./famouswords/famouswords";
import { WordOrigin } from "./wordorigin/wordorigin";
import { Statistics } from "./statistics/statistics";

export const Social = () => {
  const spacing = 10;
  const isSmallScreen = useMediaQuery("(max-width:600px)");
 


  return (
    <div style={{ marginTop: "100px" }}>
      <Grid container spacing={isSmallScreen ? 0 : spacing}>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            spacing={isSmallScreen ? 0 : spacing}
            flexDirection="row"
          >
            <Grid item xs={12} lg={4} md={4}>
              <FamouseWords />
            </Grid>
            <Grid item xs={12} lg={4} md={4}>
              <WordOrigin />
            </Grid>
            <Grid item xs={12} lg={4} md={4}>
              <Statistics />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
