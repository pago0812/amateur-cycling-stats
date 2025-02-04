"use server";

import { redirect } from "next/navigation";
import { login, signin } from "@services/users-management";
import { Urls } from "src/constants/urls";
import { UserSessionResponse } from "@type-services/users-management";
import { saveJWT, revokeJWT } from "@utils/session";

export const loginAction = async (
  _state: UserSessionResponse | undefined,
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
  _state: UserSessionResponse | undefined,
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
