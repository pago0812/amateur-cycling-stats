import { User } from "@type-entities/users";
import { ServerError } from "./errors";

// Requests
export interface LoginRequest {
  email: string;
  password: string;
}

export interface SigninRequest {
  username: string;
  email: string;
  password: string;
}

export interface SessionJWTRequest {
  jwt: string;
}

// Responses
export interface UserSession {
  jwt: string;
  user: User;
}

export interface UserSessionResponse {
  data: UserSession;
  error?: ServerError;
}

export interface UserResponse {
  data: User;
  error: ServerError;
}
