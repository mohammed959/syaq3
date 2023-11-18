import React from 'react'
import { Box ,Typography } from "@mui/material";

type commonProps = {
    text:string,
    desc:string,
    subtitle1:string,
    subtitle2:string
}
export const Common = ({text,desc,subtitle1,subtitle2}:commonProps) => {
    return (
        <Box
          sx={{ paddingX: "10px", marginTop: "10px" }}
          className="second-section-orign-words"
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
              {text}
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              paddingX: "20px",
              paddingY: "10px"
            }}
          >
            <Box
              className="second-section"
              sx={{
                width: "95%",
                marginTop: "20px",
                marginBottom: "10px",
                paddingX: "10px",
                textAlign: "center"
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "20px" }}
              >
                  {desc}
               
              </Typography>{" "}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center"
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    {subtitle1}
                </Typography>{" "}
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "rgba(84, 101, 255, 1)" }}
                >
                    {subtitle2}
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
        </Box>
    )
}