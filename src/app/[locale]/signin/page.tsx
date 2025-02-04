import { Box } from "@mui/material";
import { redirect } from "next/navigation";
// Components
import { SigninForm } from "@components/user-management/signin-form/signin-form";
// Constants
import { Urls } from "@constants/urls";
// Services
import { getMyself } from "@services/users";

const SigninPage = async () => {
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
      <SigninForm />
    </Box>
  );
};

export default SigninPage;
