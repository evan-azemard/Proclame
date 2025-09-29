import { NewUser, PublicUser } from "@/entities";

export interface AuthService {
  getUserById: (userId: string) => Promise<PublicUser | "USER_NOT_FOUND">;
  create: (newUserData: NewUser) => Promise<PublicUser | "NO_USER_CREATED">;
  getPassword: (
    email: string
  ) => Promise<{ id: string; password: string } | "NO_EMAIL">;
}
