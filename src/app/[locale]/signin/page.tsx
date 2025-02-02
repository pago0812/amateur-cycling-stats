import { redirect } from "next/navigation";
import { getMyselfAction } from "src/actions/user-management";
import { SigninForm } from "src/components/user-management/signin-form/signin-form";
import { Urls } from "src/constants/urls";
import { Box } from "@mui/material";

const SigninPage = async () => {
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
      <SigninForm />
    </Box>
  );
};

export default SigninPage;
