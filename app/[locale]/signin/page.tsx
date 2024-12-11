import { redirect } from "next/navigation";
import { getMyselfAction } from "@actions/user-management";
import { SigninForm } from "@components/user-management/signin-form/signin-form";
import { Urls } from "@constants/urls";

const SigninPage = async () => {
  const user = await getMyselfAction();
  if (user.data) {
    redirect(Urls.PORTAL);
  }

  return <SigninForm />;
};

export default SigninPage;
