"use server";

import { redirect } from "next/navigation";
import { getMyself, login, signin } from "@services/user-management";
import { Urls } from "@constants/urls";
import { UserSessionResponse } from "@type-services/users";
import { getJWT, saveJWT, revokeJWT } from "@utils/session";

export const loginAction = async (
  state: UserSessionResponse | undefined,
  formData: FormData,
) => {
  const loginResponse = await login({
    email: formData.get("email")?.toString() || "",
    password: formData.get("password")?.toString() || "",
  });

  if (loginResponse.error) {
    return loginResponse;
  }

  if (loginResponse.data) {
    await saveJWT(loginResponse.data.jwt);
    redirect(Urls.PORTAL);
  }
};

export const signinAction = async (
  state: UserSessionResponse | undefined,
  formData: FormData,
) => {
  const signinResponse = await signin({
    username: formData.get("username")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    password: formData.get("password")?.toString() || "",
  });

  if (signinResponse.error) {
    return signinResponse;
  }

  if (signinResponse.data) {
    await saveJWT(signinResponse.data.jwt);
    redirect(Urls.PORTAL);
  }
};

export const logoutAction = async () => {
  await revokeJWT();
  redirect(Urls.HOME);
};

export const getMyselfAction = async () => {
  const jwtObject = await getJWT();
  return await getMyself(jwtObject);
};
