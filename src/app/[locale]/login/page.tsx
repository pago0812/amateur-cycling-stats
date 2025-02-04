import { Box } from "@mui/material";
import { redirect } from "next/navigation";
import { LoginForm } from "@components/user-management/login-form/login-form";
import { Urls } from "@constants/urls";
import { getMyself } from "@services/users";

const LoginPage = async () => {
  const user = await getMyself();
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
