import { Role } from "./role";

export interface User {
  id: string;
  documentId: string;
  username: string;
  email: string;
  password: number;
  role?: Role;
}
