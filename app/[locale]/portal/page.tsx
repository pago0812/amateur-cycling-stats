import { Urls } from "@constants/urls";
import { Box, Button } from "@mui/material";
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
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      Welcome {user.data?.username}
      <form action={logoutAction}>
        <Button type="submit">{t("logout")}</Button>
      </form>
    </Box>
  );
};

export default OrganizerPage;
