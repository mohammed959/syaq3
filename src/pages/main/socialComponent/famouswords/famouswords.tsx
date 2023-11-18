import React, { useState } from "react";
import { Box } from "@mui/system";
import ButtonBase from "../../../../components/buttonbase/buttonbase";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { CustomBadge } from "../../../../components/badges/badges";

export const FamouseWords = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <div>
      <Box sx={{ textAlign: "right" }}>
        <Box className="first-section" sx={{ paddingX: "10px" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            شائع الكلمات في منصة إكس
          </Typography>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <ButtonBase
              key={index}
              active={index === activeButton}
              onClick={() => handleButtonClick(index)}
            >
              <span style={{ fontSize: "20px", lineHeight: "26px" }}>
                أمطار
              </span>
            </ButtonBase>
          ))}
        </Box>
        <Box
          sx={{ backgroundColor: "white", paddingX: "20px", paddingY: "10px" }}
        >
          <Box
            className="second-section"
            sx={{
              width: "95%",
              marginTop: "20px",
              marginBottom: "10px",
              paddingX: "10px"
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center"
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  أمطار
                </Typography>{" "}
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "rgba(0, 0, 0, 0.55)" }}
                >
                  ١٣،٥٦٠ مرة
                </Typography>{" "}
              </Box>
            </Box>
            <Box>
              <Typography sx={{ marginTop: "10px" }}>
                جمع تكسير من مَطَر ، و المَطَرُ هو الماء المنكسب من السَّحابِ
              </Typography>
            </Box>
          </Box>
          <Divider sx={{}} />

          <Box
            className="third-section"
            sx={{ marginTop: "10px", marginBottom: "10px", paddingX: "10px" }}
          >
            <Typography
              variant="h6"
              sx={{ color: "rgba(0, 0, 0, 0.45)", fontSize: "15px" }}
            >
              الكلمة في سياق{" "}
            </Typography>
            <Typography sx={{ color: "rgba(0, 0, 0, 1)", fontSize: "16px" }}>
              هطول أمطار متفرقة على المملكة العربية السعودية شملت عدة مدن .{" "}
            </Typography>
          </Box>

          <Divider />

          <Box
            className="fourth-section"
            sx={{ marginTop: "10px", marginBottom: "10px", paddingX: "10px" }}
          >
            <Typography
              variant="h6"
              sx={{ color: "rgba(0, 0, 0, 0.45)", fontSize: "15px" }}
            >
              كلمات متداولة مع أمطار
            </Typography>
            <Box sx={{ marginTop: "10px" }}>
              <CustomBadge text="صـيبا" type={true} />
              <CustomBadge text="نافعا" type={true} />
              <CustomBadge text="تباشير" type={false} />
              <CustomBadge text="خير" type={true} />
              <CustomBadge text="بركة" type={false} />
              <CustomBadge text="نعمة" type={false} />
              <CustomBadge text="كثير" type={false} />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
