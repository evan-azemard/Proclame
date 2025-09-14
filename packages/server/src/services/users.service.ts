import { userModel } from "@/models";
import { UserService } from "@/types";

export const userService: UserService = {
  getUserById: async (userId) => {
    return await userModel.getById(userId);
  },

  getAll: async () => {
    const users = await userModel.getAll();
    if (!users) return "USER_NOT_FOUND";
    return users;
  },

  create: async (newUserData) => {
    try {
      return await userModel.create(newUserData);
    } catch (error: unknown) {
      const err = error as { code?: string; message?: string; detail?: string };

      if (
        err.code === "23505" ||
        err.message?.includes("duplicate key") ||
        err.code === "ER_DUP_ENTRY"
      ) {
        if (err.detail?.includes("email")) return "DUPLICATE_EMAIL";
        if (err.detail?.includes("username")) return "DUPLICATE_USERNAME";
      }
      throw error;
    }
  },

  update: async (userId, updateUserData) => {
    try {
      const updated = await userModel.update(userId, updateUserData);
      if (!updated) return "USER_NOT_FOUND";
      return updated;
    } catch (error: unknown) {
      const err = error as { code?: string; message?: string; detail?: string };
      if (
        err.code === "23505" ||
        err.message?.includes("duplicate key") ||
        err.code === "ER_DUP_ENTRY"
      ) {
        if (err.detail?.includes("email")) return "DUPLICATE_EMAIL";
        if (err.detail?.includes("username")) return "DUPLICATE_USERNAME";
      }
      throw error;
    }
  },

  remove: async (userId) => {
    return await userModel.delete(userId);
  },
};
