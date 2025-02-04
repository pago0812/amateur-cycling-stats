import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { Box } from "@mui/material";
// Components
import { Onboarding } from "@components/portal/onboarding/onboarding";
import { PortalHeader } from "@components/portal/portal-header/portal-header";
// Constants
import { Urls } from "@constants/urls";
import { RoleTypeEnum } from "@type-collections/roles";
// Services
import { getMyself } from "@services/users";

const OrganizerPage = async () => {
  const t = await getTranslations();
  const user = await getMyself();

  if (user.error) {
    redirect(Urls.LOGIN);
  }
  return (
    <Box>
      <PortalHeader user={user} />
      <Box
        component="section"
        sx={{
          paddingX: { xs: "8px", sm: "16px", md: "24px", lg: "32px" },
          paddingY: { xs: "16px", sm: "24px", md: "32px", lg: "40px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {user.data?.role?.type === RoleTypeEnum.NEW_USER && <Onboarding />}
        </Box>
      </Box>
    </Box>
  );
};

export default OrganizerPage;
