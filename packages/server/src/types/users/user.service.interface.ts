import { NewUser, PublicUser, UpdateUser } from "@/entities";

export interface UserService {
  getUserById: (userId: string) => Promise<PublicUser | undefined>;
  getAll: () => Promise<PublicUser[] | undefined | "USER_NOT_FOUND">;
  create: (
    newUserData: NewUser
  ) => Promise<
    PublicUser | "DUPLICATE_EMAIL" | "DUPLICATE_USERNAME" | undefined
  >;
  update: (
    userId: string,
    updateUserData: UpdateUser
  ) => Promise<
    | PublicUser
    | "DUPLICATE_EMAIL"
    | "DUPLICATE_USERNAME"
    | "USER_NOT_FOUND"
    | undefined
  >;
  remove: (userId: string) => Promise<number>;
};