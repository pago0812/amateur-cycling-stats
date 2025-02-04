import {
  LoginRequest,
  SigninRequest,
  UserSessionResponse,
} from "@type-services/users-management";

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
