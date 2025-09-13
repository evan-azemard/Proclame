import { NewStatus, Status, UpdateStatus } from "@/entities/statuses.entity";
import { statusesModel } from "@/models/statuses.model";

export const statusService = {
  getAll: async (): Promise<Status[] | undefined> => {
    return await statusesModel.getAll();
  },

  create: async (
    newStatusData: NewStatus
  ): Promise<Status | string | undefined> => {
    try {
      return await statusesModel.create(newStatusData);
    } catch (error: any) {
      if (
        error.code === "23505" ||
        error.message?.includes("duplicate key") ||
        error.code === "ER_DUP_ENTRY"
      ) {
        return "DUPLICATE_LABEL";
      }
      throw error;
    }
  },

  update: async (statusData: UpdateStatus): Promise<Status | undefined> => {
    return await statusesModel.update(statusData);
  },

  remove: async (statusId: string): Promise<number> => {
    return await statusesModel.delete(statusId);
  },
};
