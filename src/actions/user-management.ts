"use server";

import { redirect } from "next/navigation";
import {
  getMyself,
  login,
  setRoletoUser,
  signin,
} from "src/services/user-management";
import { Urls } from "src/constants/urls";
import { UserResponse, UserSessionResponse } from "@type-services/users";
import { getJWT, saveJWT, revokeJWT } from "src/utils/session";
import { getRoles } from "src/services/roles";

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

export const selectRoleAction = async (
  state: UserResponse | undefined,
  formData: FormData,
) => {
  const roleType = formData.get("roleType")?.toString();

  const jwtObject = await getJWT();
  const userResponse = await getMyself(jwtObject);
  if (userResponse.error) {
    return userResponse;
  }

  const rolesResponse = await getRoles();
  if (rolesResponse.error) {
    return { error: rolesResponse.error } as UserResponse;
  }
  const role = rolesResponse.data?.roles.find((r) => r.type === roleType);

  if (!(role && role.documentId)) {
    return { error: { message: "Role does not exist" } } as UserResponse;
  }

  const updateRoleResponse = await setRoletoUser({
    jwt: jwtObject.jwt,
    userId: userResponse.data?.id,
    roleId: role?.id,
  });

  return updateRoleResponse;
};
