"use client";

import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    md: React.CSSProperties;
    mdb: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    md?: React.CSSProperties;
    mdb?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    md: true;
    mdb: true;
  }
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: "3rem",
      fontWeight: "500",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: "500",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: "500",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "500",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "500",
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: "500",
    },
    md: {
      fontSize: "16px",
    },
    mdb: {
      fontSize: "16px",
      fontWeight: "bold",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {},
      defaultProps: {
        variantMapping: {
          md: "span",
          mdb: "span",
        },
      },
    },
  },
});

export default theme;
