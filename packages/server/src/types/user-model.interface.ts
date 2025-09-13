import { NewUser, PublicUser, UpdateUser } from "@/entities/users.entity";

export interface UserModel {
  getById(userId: string): Promise<PublicUser | undefined>;
  getAll(): Promise<PublicUser[]>;
  create(newUserData: NewUser): Promise<PublicUser | undefined>;
  update(
    userId: string,
    updateUserData: UpdateUser
  ): Promise<PublicUser | undefined>;
  delete(userId: string): Promise<number>;
  findUserByEmail(
    email: string
  ): Promise<{ id: string; password: string } | undefined>;
}
