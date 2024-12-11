import { Role } from "@type-entities/role";
import { ServerError } from "./errors";

// Responses
export interface RolesResponse {
  data?: { roles: Role[] };
  error?: ServerError;
}
