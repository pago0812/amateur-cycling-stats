import { RolesResponse } from "@type-services/roles";

export const getRoles = async (): Promise<RolesResponse> => {
  const rolesResponse = await fetch(
    `${process.env.SERVICE_URL}/api/users-permissions/roles`,
  );
  if (rolesResponse.ok) {
    return { data: await rolesResponse.json() };
  }

  const roles = (await rolesResponse.json()).data;
  return roles;
};
