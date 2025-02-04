import { User } from "@type-entities/users";
import { ServerError } from "./errors";

// Requests
export interface SetRoleRequest {
  userId?: string;
  roleId?: string;
}

// Responses
export interface UserResponse {
  data?: User;
  error?: ServerError;
}
