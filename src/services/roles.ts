import { RolesResponse } from "@type-services/roles";
import { getJWT } from "@utils/session";

export const getRoles = async (): Promise<RolesResponse> => {
  const { jwt } = await getJWT();

  const rolesResponse = await fetch(
    `${process.env.SERVICE_URL}/api/users-permissions/roles`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );
  if (rolesResponse.ok) {
    return { data: await rolesResponse.json() };
  }

  const roles = await rolesResponse.json();
  return roles;
};
