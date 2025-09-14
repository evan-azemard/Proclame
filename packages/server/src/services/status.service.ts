import { statusesModel } from "@/models";
import { StatusService } from "@/types";

export const statusService: StatusService = {
  getAll: async () => {
    const statuses = await statusesModel.getAll();
    if (!statuses) return "STATUS_NOT_FOUND";
    return statuses;
  },

  create: async (newStatusData) => {
    try {
      const created = await statusesModel.create(newStatusData);
      if (!created) return "DUPLICATE_LABEL";
      return created;
    } catch (error: unknown) {
      const err = error as { code?: string; message?: string; detail?: string };
      if (
        err.code === "23505" ||
        err.message?.includes("duplicate key") ||
        err.code === "ER_DUP_ENTRY"
      ) {
        return "DUPLICATE_LABEL";
      }
      throw error;
    }
  },

  update: async (statusData) => {
    try {
      const updated = await statusesModel.update(statusData);
      if (!updated) return "STATUS_NOT_FOUND";
      return updated;
    } catch (error: unknown) {
      const err = error as { code?: string; message?: string; detail?: string };
      if (
        err.code === "23505" ||
        err.message?.includes("duplicate key") ||
        err.code === "ER_DUP_ENTRY"
      ) {
        return "DUPLICATE_LABEL";
      }
      throw error;
    }
  },

  remove: async (statusId) => {
    return await statusesModel.delete(statusId);
  },
};
