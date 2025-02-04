import React from "react";
import { getTranslations } from "next-intl/server";
import { Box, Button, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// Components
import { Sidenav } from "@components/common/sidenav/sidenav";
// Contants
import { Urls } from "@constants/urls";
// Services
import { getMyself } from "@services/users";

const Header = async () => {
  const t = await getTranslations();
  const user = await getMyself();

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
          <Button href={Urls.HOME} sx={{ color: "white" }}>
            {t("home")}
          </Button>
          <Button href={Urls.EVENTS} sx={{ color: "white" }}>
            {t("events")}
          </Button>
          <Button href={Urls.TEAMS} sx={{ color: "white" }}>
            {t("teams")}
          </Button>
          {user.error && (
            <Button href={Urls.LOGIN}>
              <Typography
                component={"span"}
                sx={{ fontWeight: "bold", color: "white" }}
              >
                {t("login")}
              </Typography>
            </Button>
          )}
          {user.data && (
            <Button href={Urls.PORTAL}>
              <Typography
                component={"span"}
                sx={{ fontWeight: "bold", color: "white" }}
              >
                {t("account")}
              </Typography>
            </Button>
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
