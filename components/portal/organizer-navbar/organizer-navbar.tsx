import { AppBar, Link, Toolbar } from "@mui/material";

import { useTranslations } from "next-intl";

const OrganizerNavbar = () => {
  const t = useTranslations();

  return (
    <AppBar position="relative" component="nav">
      <Toolbar sx={{ gap: "16px" }}>
        <Link underline="none" color="white" href="/home">
          {t("home")}
        </Link>
        <Link underline="none" color="white" href="/about">
          {t("about")}
        </Link>
        <Link underline="none" color="white" href="/contact">
          {t("contact")}
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export { OrganizerNavbar };
