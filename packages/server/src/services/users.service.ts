import { NewUser, PublicUser, UpdateUser } from "@/entities/users.entity";
import { userModel } from "@/models/users.model";

export const getUserById = async (
  userId: string
): Promise<PublicUser | undefined> => {
  return await userModel.getById(userId);
};
export const getAll = async (): Promise<PublicUser[] | undefined> => {
  return await userModel.getAll();
};
export const create = async (
  newUserData: NewUser
): Promise<PublicUser | undefined> => {
  return await userModel.create(newUserData);
};
export const update = async (
  userId: string,
  updateUserData: UpdateUser
): Promise<PublicUser | undefined> => {
  return await userModel.update(userId, updateUserData);
};
export const remove = async (userId: string): Promise<number> => {
  return await userModel.delete(userId);
};
