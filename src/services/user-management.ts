import qs from "qs";
import {
  LoginRequest,
  SessionJWTRequest,
  SetRoleRequest,
  SigninRequest,
  UserResponse,
  UserSessionResponse,
} from "@type-services/users";

export const login = async ({
  email,
  password,
}: LoginRequest): Promise<UserSessionResponse> => {
  const loginResponse = await fetch(
    `${process.env.SERVICE_URL}/api/auth/local`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    },
  );

  if (loginResponse.ok) {
    return { data: await loginResponse.json() };
  }

  return await loginResponse.json();
};

export const signin = async ({ username, email, password }: SigninRequest) => {
  const signinResponse = await fetch(
    `${process.env.SERVICE_URL}/api/auth/local/register`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    },
  );
  if (signinResponse.ok) {
    return { data: await signinResponse.json() };
  }

  return await signinResponse.json();
};

export const getMyself = async ({
  jwt,
}: SessionJWTRequest): Promise<UserResponse> => {
  const query = {
    populate: "role",
  };

  const queryString = qs.stringify(query);

  const myselfResponse = await fetch(
    `${process.env.SERVICE_URL}/api/users/me?${queryString}`,
    {
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

export const setRoletoUser = async ({
  roleId,
  userId,
  jwt,
}: SetRoleRequest): Promise<UserResponse> => {
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
    return { data: await updateUserResponse.json() };
  }

  return await updateUserResponse.json();
};
