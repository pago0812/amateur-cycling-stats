import { Onboarding } from "@components/portal/onboarding/onboarding";
import { Urls } from "@constants/urls";
import { Box, Button, Typography } from "@mui/material";
import { RoleTypeEnum } from "@type-collections/roles";
import { getMyselfAction, logoutAction } from "actions/user-management";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

const OrganizerPage = async () => {
  const t = await getTranslations();
  const user = await getMyselfAction();

  if (user.error) {
    redirect(Urls.LOGIN);
  }
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <form action={logoutAction}>
          <Button type="submit">{t("logout")}</Button>
        </form>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {user.data?.role?.type === RoleTypeEnum.USER && <Onboarding />}
      </Box>
    </Box>
  );
};

export default OrganizerPage;
