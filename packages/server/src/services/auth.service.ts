import { userModel } from "@/models";
import { AuthService } from "@/types/auth/auth.service.interface";
import { throwIfDuplicate } from "@/utils/throwIfDuplicate";

export const authService: AuthService = {
  getUserById: async (userId) =>
    (await userModel.getById(userId)) ?? "USER_NOT_FOUND",

  create: async (newUserData) => {
    try {
      return (await userModel.create(newUserData)) ?? "NO_USER_CREATED";
    } catch (error: unknown) {
      throwIfDuplicate(error, "CREATING", "USER", ["email", "username"]);
      throw new Error("ERROR_CREATING_USER: " + String(error));
    }
  },

  getPassword: async (email) => {
    try {
      return (await userModel.getPassword(email)) ?? "NO_EMAIL";
    } catch (error) {
      throw new Error("ERROR_GET_PASSWORD: " + String(error));
    }
  },
};
