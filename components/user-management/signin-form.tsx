"use client";

import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useAlertStore } from "@stores/alert-store";
import { signinAction } from "actions/user-management";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export const SigninForm = () => {
  const [state, action] = useFormState(signinAction, undefined);
  const t = useTranslations();
  const { openAlert } = useAlertStore();

  useEffect(() => {
    if (state?.error) {
      openAlert(t(`serverErrors.${state.error.message}`));
    }
  }, [state]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ mb: "32px" }} component="h2" variant="h5">
        {t("signinTitle")}
      </Typography>
      <form action={action}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "360px",
          }}
        >
          <TextField name="username" type="text" label={t("userName")} />
          <TextField name="email" type="email" label={t("email")} />
          <TextField name="password" type="password" label={t("password")} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <Button sx={{ width: "100%" }} variant="contained" type="submit">
              {t("createAccount")}
            </Button>
            <Link underline="hover" href="/login">
              {t("alreadyHaveAccount")}
            </Link>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
