import { getMyselfAction } from "@actions/user-management";
import { Urls } from "@constants/urls";
import { Box, Button, Link, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { getTranslations } from "next-intl/server";
import React from "react";

const Header = async () => {
  const t = await getTranslations();
  const user = await getMyselfAction();

  return (
    <AppBar position="static" component="nav">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <h1>ACS</h1>
        <Box
          component="nav"
          sx={{ display: { xs: "none", sm: "flex" }, gap: "16px" }}
        >
          <Link href={Urls.HOME} underline="none" color="white">
            {t("home")}
          </Link>
          <Link href={Urls.EVENTS} underline="none" color="white">
            {t("events")}
          </Link>
          <Link href={Urls.TEAMS} underline="none" color="white">
            {t("teams")}
          </Link>
          {user.error && (
            <Link href={Urls.LOGIN} underline="none" color="#fff">
              <Typography component={"span"} sx={{ fontWeight: "bold" }}>
                {t("login")}
              </Typography>
            </Link>
          )}
          {user.data && (
            <Link href={Urls.PORTAL} underline="none" color="#fff">
              <Typography component={"span"} sx={{ fontWeight: "bold" }}>
                {t("account")}
              </Typography>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
