"use client";

import { Alert, Snackbar } from "@mui/material";
import { useAlertStore } from "@stores/alert-store";

const GlobalAlert = () => {
  const { open, text, closeAlert } = useAlertStore();

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={5000}
      onClose={() => closeAlert()}
    >
      <Alert onClose={() => closeAlert()} severity="error" variant="filled">
        {text}
      </Alert>
    </Snackbar>
  );
};

export { GlobalAlert };
