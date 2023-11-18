import React from "react";
import { Box, Typography } from "@mui/material";
import Syaq from "../../images/syaq.svg";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Footer } from "../../components/footer/footer";
import { Services } from "../../data/data";
import { NormalBadge } from "../../components/badges/badges";
import { SimpleNav } from "../../components/nav/nav";

export const Welcoming = () => {
  return (
    <div>
      <SimpleNav />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          flexDirection: "column",
          borderRadius: 1,
          alignItems: "center",
          width: "100%"
        }}
      >
        <Box sx={{ marginTop: 20 }}>
          <img src={Syaq} width="100px" />
        </Box>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          marginTop="100px"
          marginBottom="250px"
        >
          {Services.map(item => (
            <Grid
              key={item.text}
              item
              component={NavLink}
              to={`${item.url}`}
              sx={{
                width: "calc(238.25px - 36px)",
                height: "282px",
                borderRadius: "8px",
                padding: "18px",
                margin: "10px",
                fontSize: 16,
                color: "rgba(0, 0, 0, 0.5)",
                background: "rgba(235, 243, 255, 1)",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                textDecoration: "none" // Add this line to remove underline
              }}
            >
              <Box sx={{ position: "relative", height: "100%" }}>
                <Box>
                  <NormalBadge background={item.background} text={item.serviceAvailability}/>
                </Box>
                <Typography
                  variant="h4"
                  style={{
                    color: item.color,
                    position: "absolute",
                    bottom: 0,
                    textAlign: "right"
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};
