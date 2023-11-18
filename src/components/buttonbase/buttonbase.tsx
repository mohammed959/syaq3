import React from "react";
import ButtonBase from "@mui/material/ButtonBase";

interface CustomButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}

const CustomButton = ({
  children,
  active,
  onClick,
  ...props
}: CustomButtonProps) => {
  return (
    <ButtonBase
      onClick={onClick}
      {...props}
      sx={{
        borderRadius: "8px",
        height: "35px",
        padding: "7px 14px",
        marginLeft: "10px",
        margintRight: "10px",
        backgroundColor: active
          ? "rgba(28, 119, 255, 1)"
          : "rgba(0, 0, 0, 0.1)",
        color: "#fff",
        fontWeight: "bold",
        marginBottom: "10px"
      }}
    >
      {children}
    </ButtonBase>
  );
};

export default CustomButton;
