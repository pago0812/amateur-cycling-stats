"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useTranslations } from "next-intl";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { loginAction } from "actions/user-management";
import { useAlertStore } from "@stores/alert-store";
import { Urls } from "@constants/urls";

const LoginForm = () => {
  const [state, action] = useFormState(loginAction, undefined);
  const t = useTranslations();
  const { openAlert } = useAlertStore();

  useEffect(() => {
    if (state?.error) {
      openAlert(t(`serverErrors.${state.error.message}`));
    }
  }, [state]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ mb: "32px" }} component="h2" variant="h3">
          {t("loginTitle")}
        </Typography>
        <form
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
          action={action}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: { xs: "100%", sm: "360px" },
            }}
          >
            <TextField name="email" type="email" required label={t("email")} />
            <TextField
              name="password"
              type="password"
              required
              label={t("password")}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <Button sx={{ width: "100%" }} variant="contained" type="submit">
                {t("enter")}
              </Button>
              <Link color="secondary" underline="hover" href={Urls.SIGNIN}>
                {t("notHaveAccount")}
              </Link>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
};

export { LoginForm };
