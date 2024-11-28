import { Box, Button, Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTranslations } from "next-intl";
import React from "react";

const Header = () => {
  const t = useTranslations();

  return (
    <AppBar position="static" component="nav">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <h1>ACS</h1>
        <Box
          component="nav"
          sx={{ display: { xs: "none", sm: "flex" }, gap: "16px" }}
        >
          <Link href="/" underline="none" color="white">
            {t("home")}
          </Link>
          <Link href="/events" underline="none" color="white">
            {t("events")}
          </Link>
          <Link href="/teams" underline="none" color="white">
            {t("teams")}
          </Link>
          <Link href="/ranking" underline="none" color="white">
            {t("ranking")}
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
