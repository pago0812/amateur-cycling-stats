import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";

import { useTranslations } from "next-intl";

const OrganizerNavbar = () => {
  const t = useTranslations();

  return (
    <AppBar position="relative" component="nav">
      <Toolbar>
        <Link color="primary" href="/home">
          {t("home")}
        </Link>
        <Link href="/about">{t("about")}</Link>
        <Link href="/contact">{t("contact")}</Link>
      </Toolbar>
    </AppBar>
  );
};

export { OrganizerNavbar };
