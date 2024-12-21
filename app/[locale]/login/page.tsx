import { getMyselfAction } from "@actions/user-management";
import { LoginForm } from "@components/user-management/login-form/login-form";
import { Urls } from "@constants/urls";
import { Box } from "@mui/material";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const user = await getMyselfAction();
  if (user.data) {
    redirect(Urls.PORTAL);
  }

  return (
    <Box
      sx={{
        paddingX: { xs: "8px", sm: "16px", md: "24px", lg: "32px" },
        paddingY: { xs: "16px", sm: "24px", md: "32px", lg: "40px" },
      }}
    >
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
