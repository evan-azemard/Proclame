import { userModel } from "@/models";
import { UserService } from "@/types";

export const userService: UserService = {
  getUserById: async (userId) => {
    return await userModel.getById(userId);
  },

  getAll: async () => {
    return await userModel.getAll();
  },

  create: async (newUserData) => {
    try {
      return await userModel.create(newUserData);
    } catch (error: any) {
      if (
        error.code === "23505" ||
        error.message?.includes("duplicate key") ||
        error.code === "ER_DUP_ENTRY"
      ) {
        if (error.detail?.includes("email")) return "DUPLICATE_EMAIL";
        if (error.detail?.includes("username")) return "DUPLICATE_USERNAME";
      }
      throw error;
    }
  },

  update: async (userId, updateUserData) => {
    try {
      const updated = await userModel.update(userId, updateUserData);
      if (!updated) return "USER_NOT_FOUND";
      return updated;
    } catch (error: any) {
      if (
        error.code === "23505" ||
        error.message?.includes("duplicate key") ||
        error.code === "ER_DUP_ENTRY"
      ) {
        if (error.detail?.includes("email")) return "DUPLICATE_EMAIL";
        if (error.detail?.includes("username")) return "DUPLICATE_USERNAME";
      }
      throw error;
    }
  },

  remove: async (userId) => {
    return await userModel.delete(userId);
  },
};
