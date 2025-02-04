import { Role } from "@type-entities/roles";
import { ServerError } from "./errors";

// Responses
export interface RolesResponse {
  data?: { roles: Role[] };
  error?: ServerError;
}
