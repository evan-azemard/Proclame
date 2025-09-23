import { NewUser, PublicUser, UpdateUser } from "@/entities";

export interface UserModel {
  getById(userId: string): Promise<PublicUser | undefined>;
  getAll(): Promise<PublicUser[]>;
  getPassword(email:string): Promise<{id: string, password: string} | undefined>
  create(newUserData: NewUser): Promise<PublicUser | undefined>;
  update(
    userId: string,
    updateUserData: UpdateUser
  ): Promise<PublicUser | undefined>;
  delete: (userId: string) => Promise<PublicUser | undefined>;
  findUserByEmail(
    email: string
  ): Promise<{ id: string; password: string } | undefined>;
}
