import React from "react";
import { Typography, Container } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" sx={{fontSize:15,color:'rgba(0, 0, 0, 0.5)'}} >
      إصدار بيتا الحقوق محفوظة – منصة سياق للغة العربية © 2023
    </Typography>
  );
}

export const Footer = () => {
  return (
    <footer
      style={{
        padding: "10px",
        textAlign: "center"
      }}
    >
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </footer>
  );
};
