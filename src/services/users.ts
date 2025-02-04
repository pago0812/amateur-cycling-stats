import { revalidateTag } from "next/cache";
import { SetRoleRequest, UserResponse } from "@type-services/users";
import { getJWT } from "@utils/session";
import qs from "qs";

export const getMyself = async (): Promise<UserResponse> => {
  const { jwt } = await getJWT();

  const query = {
    populate: "role",
  };

  const queryString = qs.stringify(query);

  const myselfResponse = await fetch(
    `${process.env.SERVICE_URL}/api/users/me?${queryString}`,
    {
      next: { tags: ["users/getMyself"] },
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  if (myselfResponse.ok) {
    return { data: await myselfResponse.json() };
  }

  return await myselfResponse.json();
};

export const updateUser = async ({
  roleId,
  userId,
}: SetRoleRequest): Promise<UserResponse> => {
  const { jwt } = await getJWT();
  const body = {
    role: roleId,
  };

  const updateUserResponse = await fetch(
    `${process.env.SERVICE_URL}/api/users/${userId}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },

      body: JSON.stringify(body),
    },
  );
  if (updateUserResponse.ok) {
    revalidateTag("users/getMyself");
    return { data: await updateUserResponse.json() };
  }

  return await updateUserResponse.json();
};
