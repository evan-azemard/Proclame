import { NewUser } from "@/entities";
import { Response } from "express";

export type AuthenticatedUser = {
  id: string;
  email: string;
  role: string;
  username: string;
  createdAt: Date | null;
  updatedAt: Date;
  lastLogin: Date | null;
};

export interface AuthService {
  register: (
    userData: NewUser
  ) => Promise<
    AuthenticatedUser | "NO_USER_CREATED" | "NO_ROLE" | "ERROR_HASHING_PASSWORD"
  >;

  login: (
    email: string,
    password: string,
    res: Response
  ) => Promise<
    | AuthenticatedUser
    | "NO_EMAIL"
    | "INVALID_PASSWORD"
    | "USER_NOT_FOUND"
    | "NO_ROLE"
  >;

  me: (
    userId: string
  ) => Promise<AuthenticatedUser | "USER_NOT_FOUND" | "NO_ROLE">;
}
