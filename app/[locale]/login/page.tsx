import { getMyselfAction } from "@actions/user-management";
import { LoginForm } from "@components/user-management/login-form";
import { Urls } from "@constants/urls";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const user = await getMyselfAction();
  if (user.data) {
    redirect(Urls.PORTAL);
  }

  return <LoginForm />;
};

export default LoginPage;
