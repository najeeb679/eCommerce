import { COLORS } from "@muc/constants";
import { Box, Button, CircularProgress } from "@mui/material";
import React from "react";

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset";
  width?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant: "contained" | "outlined";
  height?: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

const CustomBtn: React.FC<ButtonProps> = (props) => {
  const {
    title,
    type,
    width,
    onClick,
    disabled,
    variant,
    height,
    icon,
    isLoading = false,
  } = props || {};
  return (
    <Box>
      <Button
        type={type ? type : "button"}
        variant={variant}
        onClick={onClick}
        disabled={disabled}
        startIcon={icon}
        sx={{
          display: "flex",
          boxShadow: "none",
          width: {
            md: width ? width : "auto",
            sm: width ? width : "auto",
            xs:'100%'
          },
          height: {
            md: height ? height : "inherit",
            sm: height ? height : "inherit",
          },
          textTransform: "none",
          "&:hover": {
            bgcolor:
              variant === "outlined" ? "transparent" : COLORS.primary.main,
            boxShadow: "none",
          },
        }}
      >
        {isLoading ? (
          <CircularProgress
            sx={{
              color:
                variant === "outlined"
                  ? COLORS.primary.main
                  : COLORS.white.main,
            }}
            size={25}
          />
        ) : (
          <>{title}</>
        )}
      </Button>
    </Box>
  );
};

export default CustomBtn;
