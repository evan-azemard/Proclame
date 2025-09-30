import { NewUser, PublicUser } from "@/entities";

import { Response } from "express";

export interface AuthService {
  register: (
    userData: NewUser
  ) => Promise<
    | PublicUser
    | "NO_USER_CREATED"
    | "NO_ROLE"
    | "ERROR_HASHING_PASSWORD"
    | string
  >;

  login: (
    email: string,
    password: string,
    res: Response
  ) => Promise<
    | {
        user: {
          id: string;
          email: string;
          role: string;
          username: string;
          createdAt: Date | null;
          updatedAt: Date;
          lastLogin: Date | null;
        };
      }
    | "NO_EMAIL"
    | "INVALID_PASSWORD"
    | "USER_NOT_FOUND"
    | "NO_ROLE"
    | string
  >;

  me: (userId: string) => Promise<
    | {
        id: string;
        email: string;
        role: string;
        username: string;
        createdAt: Date | null;
        updatedAt: Date;
        lastLogin: Date | null;
      }
    | "USER_NOT_FOUND"
    | "NO_ROLE"
    | string
  >;
}
