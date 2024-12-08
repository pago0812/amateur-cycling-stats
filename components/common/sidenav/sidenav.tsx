"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Box,
  Drawer,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { UserResponse } from "@type-services/users";
import { Urls } from "@constants/urls";

interface SidenavProps {
  user: UserResponse;
}

const Sidenav = ({ user }: SidenavProps) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const t = useTranslations();
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon htmlColor="#fff" />
      </IconButton>
      <Drawer
        open={open}
        anchor={"right"}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box
          component="nav"
          sx={{
            alignItems: "end",
            background: theme.palette.primary.main,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            height: "100vh",
            padding: "40px",
          }}
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
      </Drawer>
    </>
  );
};

export { Sidenav };
