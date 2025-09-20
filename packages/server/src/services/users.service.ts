import { userModel } from "@/models";
import { UserService } from "@/types";
import { throwIfDuplicate } from "@/utils/throwIfDuplicate";

export const userService: UserService = {
  getUserById: async (userId) =>
    (await userModel.getById(userId)) ?? "USER_NOT_FOUND",

  getAll: async () => await userModel.getAll(),

  create: async (newUserData) => {
    try {
      return (await userModel.create(newUserData)) ?? "NO_USER_CREATED";
    } catch (error: unknown) {
      throwIfDuplicate(error, "CREATING", "USER", ["email", "username"]);
      throw new Error("ERROR_CREATING_USER: " + String(error));
    }
  },

  update: async (userId, updateUserData) => {
    try {
      return (
        (await userModel.update(userId, updateUserData)) ?? "USER_NOT_FOUND"
      );
    } catch (error: unknown) {
      throwIfDuplicate(error, "UPDATING", "USER", ["email", "username"]);
      throw new Error("ERROR_UPDATING_USER: " + String(error));
    }
  },

  remove: async (userId) =>
    (await userModel.delete(userId)) ?? "USER_NOT_FOUND",
};
