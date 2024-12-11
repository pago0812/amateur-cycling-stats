"use client";
import { SxProps, useTheme } from "@mui/material";

const unseOnboardingStyles = () => {
  const theme = useTheme();

  const onboardingContainerStyle = {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    width: "100%",
  };

  const onboardingBoxContainerStyle = {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: "16px",
    justifyContent: "center",
    width: "100%",
  };

  const boxStyle: SxProps = {
    width: { xs: "100%", sm: "280px" },
    padding: "16px",
    borderRadius: "16px",
    cursor: "pointer",
  };

  const selectedBoxStyle: SxProps = {
    ...boxStyle,
    border: `3px solid ${theme.palette.primary.main}`,
  };

  const uselectedBoxStyle: SxProps = {
    ...boxStyle,
    color: "gray",
    border: `1px solid gray`,
  };

  return {
    onboardingContainerStyle,
    onboardingBoxContainerStyle,
    selectedBoxStyle,
    uselectedBoxStyle,
  };
};

export { unseOnboardingStyles };
