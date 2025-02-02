"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useTranslations } from "next-intl";
import { Box, Button, Typography } from "@mui/material";
import { selectRoleAction } from "src/actions/user-management";
import { RoleTypeEnum } from "@type-collections/roles";
import { useAlertStore } from "src/stores/alert-store";
import { unseOnboardingStyles } from "./useStyles";

const Onboarding = () => {
  const {
    onboardingBoxContainerStyle,
    onboardingContainerStyle,
    selectedBoxStyle,
    uselectedBoxStyle,
  } = unseOnboardingStyles();
  const [roleType, setRoleType] = useState<RoleTypeEnum>(RoleTypeEnum.CYCLIST);

  const [state, action] = useFormState(selectRoleAction, undefined);
  const t = useTranslations();
  const { openAlert } = useAlertStore();

  useEffect(() => {
    if (state?.error) {
      openAlert(t(`serverErrors.${state.error.message}`));
    }
  }, [state]);

  return (
    <Box sx={onboardingContainerStyle}>
      <Typography variant="h4">Elige tu perfil</Typography>
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
            Ciclista
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
            Organizador
          </Typography>
        </Box>
      </Box>
      <form action={action}>
        <input name="roleType" value={roleType} type="hidden" />
        <Button variant="contained" type="submit">
          Elegir
        </Button>
      </form>
    </Box>
  );
};

export { Onboarding };
