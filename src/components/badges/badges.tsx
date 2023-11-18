import React from "react";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

type NormalBadgeProps = {
  background: string;
  text: string;
};

export const NormalBadge = ({ background, text }: NormalBadgeProps) => {
  return (
    <span
      style={{
        background: background,
        color: "white",
        textAlign: "center",
        borderRadius: "5px",
        border: "none",
        padding: "4px",
        float: "left"
      }}
    >
      {text}
    </span>
  );
};

type CustomBadgeProps = {
  text: string;
  type: boolean;
};

export const CustomBadge = ({ text, type }: CustomBadgeProps) => {
  return (
    <span
    style={{
        background:type === true ? 'rgba(143, 255, 0, 0.11)' : 'rgba(255, 0, 0, 0.11)',
        color: type === true ? 'black' : 'rgba(255, 0, 0, 1)',
        textAlign: 'center',
        borderRadius: '5px',
        border: 'none',
        padding: '10px',
        marginLeft: '10px',
        display: 'inline-flex', 
        alignItems: 'center', 
        marginTop:'10px'
      }}
    >
      {text}
      {type === false && (
        <ReportGmailerrorredIcon
          sx={{ marginRight: 2, color: "rgba(255, 0, 0, 1)"}}
        />
      )}
    </span>
  );
};
