"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useTranslations } from "next-intl";
import { Box, Button, Typography } from "@mui/material";
import { updateUserAction } from "@actions/users";
import { RoleTypeEnum } from "@type-collections/roles";
import { useAlertStore } from "@stores/alert-store";
import { unseOnboardingStyles } from "./useStyles";

const Onboarding = () => {
  const {
    onboardingBoxContainerStyle,
    onboardingContainerStyle,
    selectedBoxStyle,
    uselectedBoxStyle,
  } = unseOnboardingStyles();
  const [roleType, setRoleType] = useState<RoleTypeEnum>(RoleTypeEnum.CYCLIST);

  const [state, action] = useFormState(updateUserAction, undefined);
  const t = useTranslations();
  const { openAlert } = useAlertStore();

  useEffect(() => {
    if (state?.error) {
      openAlert(t(`serverErrors.${state.error.message}`));
    }
  }, [state]);

  return (
    <Box sx={onboardingContainerStyle}>
      <Typography variant="h4">{t("chooseProfile")}</Typography>
      <Box sx={onboardingBoxContainerStyle}>
        <Box
          sx={
            roleType === RoleTypeEnum.CYCLIST
              ? selectedBoxStyle
              : uselectedBoxStyle
          }
          onClick={() => {
            setRoleType(RoleTypeEnum.CYCLIST);
          }}
        >
          <Typography component="p" variant="mdb">
            {t("cyclist")}
          </Typography>
        </Box>
        <Box
          sx={
            roleType === RoleTypeEnum.ORGANIZER_ADMIN
              ? selectedBoxStyle
              : uselectedBoxStyle
          }
          onClick={() => {
            setRoleType(RoleTypeEnum.ORGANIZER_ADMIN);
          }}
        >
          <Typography component="p" variant="mdb">
            {t("organizer")}
          </Typography>
        </Box>
      </Box>
      <form action={action}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input name="roleType" value={roleType} type="hidden" />
          <Button variant="text" type="submit">
            {t("choose")}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export { Onboarding };
