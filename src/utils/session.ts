import "server-only";
import { cookies } from "next/headers";

const JWT_SSESSION_KEY = "jwt-session";

export async function saveJWT(jwt: string) {
  const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
  const jwtCookies = await cookies();

  jwtCookies.set(JWT_SSESSION_KEY, jwt, {
    httpOnly: true,
    secure: false,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function getJWT() {
  const jwtCookies = await cookies();

  return { jwt: jwtCookies.get(JWT_SSESSION_KEY)?.value || "" };
}

export const revokeJWT = async () => {
  const jwtCookies = await cookies();
  jwtCookies.delete(JWT_SSESSION_KEY);
};
