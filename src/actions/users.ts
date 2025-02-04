"use server";

import { getRoles } from "@services/roles";
import { getMyself, updateUser } from "@services/users";
import { UserResponse } from "@type-services/users";

export const updateUserAction = async (
  state: UserResponse | undefined,
  formData: FormData,
) => {
  const roleType = formData.get("roleType")?.toString();

  const userResponse = await getMyself();
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

  const updateRoleResponse = await updateUser({
    userId: userResponse.data?.id,
    roleId: role?.id,
  });

  return updateRoleResponse;
};
