import React from "react";
import { getTranslations } from "next-intl/server";
import { Box, Link, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { getMyselfAction } from "@actions/user-management";
import { Urls } from "@constants/urls";
import { Sidenav } from "@components/common/sidenav/sidenav";

const Header = async () => {
  const t = await getTranslations();
  const user = await getMyselfAction();

  return (
    <AppBar color="primary" position="static" component="nav">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography component="h1" variant="h3">
          ACS
        </Typography>
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
            <Link href={Urls.LOGIN} underline="none" color="white">
              <Typography component={"span"} sx={{ fontWeight: "bold" }}>
                {t("login")}
              </Typography>
            </Link>
          )}
          {user.data && (
            <Link href={Urls.PORTAL} underline="none" color="white">
              <Typography component={"span"} sx={{ fontWeight: "bold" }}>
                {t("account")}
              </Typography>
            </Link>
          )}
        </Box>
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <Sidenav user={user} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
