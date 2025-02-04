import { AppBar, Box, Button, Toolbar } from "@mui/material";

import { logoutAction } from "@actions/users-management";
import { useTranslations } from "next-intl";
import { UserResponse } from "@type-services/users-management";
import { RoleTypeEnum } from "@type-collections/roles";

interface PortalHeaderProps {
  user: UserResponse;
}

const PortalHeader = ({ user }: PortalHeaderProps) => {
  const t = useTranslations();

  return (
    <AppBar position="relative" component="nav" sx={{ boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {user.data?.role?.type === RoleTypeEnum.NEW_USER && (
          <Box sx={{ display: "flex", gap: "16px" }}></Box>
        )}
        {user.data?.role?.type === RoleTypeEnum.CYCLIST && (
          <Box sx={{ display: "flex", gap: "16px" }}>
            <Button href="/home">{t("home")}</Button>
            <Button href="/about">{t("about")}</Button>
            <Button href="/contact">{t("contact")}</Button>
          </Box>
        )}
        {user.data?.role?.type === RoleTypeEnum.ORGANIZER_ADMIN && (
          <Box sx={{ display: "flex", gap: "16px" }}>
            <Button href="/home">{t("home")}</Button>
            <Button href="/about">{t("about")}</Button>
            <Button href="/contact">{t("contact")}</Button>
          </Box>
        )}

        <form action={logoutAction}>
          <Button sx={{ color: "white" }} type="submit">
            {t("logout")}
          </Button>
        </form>
      </Toolbar>
    </AppBar>
  );
};

export { PortalHeader };
