import { NewUser, PublicUser, UpdateUser } from "@/entities/users.entity";
import { userModel } from "@/models/users.model";

export const getUserById = async (
  userId: string
): Promise<PublicUser | undefined> => {
  return await userModel.getById(userId);
};
export const getAllUsers = async (): Promise<PublicUser[] | undefined> => {
  return await userModel.getAll();
};
export const createUser = async (
  user: NewUser
): Promise<PublicUser | undefined> => {
  return await userModel.create(user);
};
export const updateUser = async (
  userId: string,
  user: UpdateUser
): Promise<number> => {
  return await userModel.update(userId, user);
};
export const deleteUser = async (userId: string): Promise<number> => {
  return await userModel.delete(userId);
};
