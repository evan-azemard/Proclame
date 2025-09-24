import { NewUser, PublicUser, UpdateUser, User } from "@/entities";

export interface UserService {
  getUserById: (userId: string) => Promise<PublicUser | "USER_NOT_FOUND">;
  getAll: () => Promise<PublicUser[]>;
  update: (
    userId: string,
    updateUserData: UpdateUser
  ) => Promise<PublicUser | "USER_NOT_FOUND">;
  remove: (userId: string) => Promise<PublicUser | "USER_NOT_FOUND">;
}
