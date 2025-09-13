import { NewStatus, Status, UpdateStatus } from "@/entities";
import { statusesModel } from "@/models";

export interface IStatusService {
  getAll(): Promise<Status[] | undefined>;
  create(newStatusData: NewStatus): Promise<Status | string | undefined>;
  update(statusData: UpdateStatus): Promise<Status | undefined>;
  remove(statusId: string): Promise<number>;
}

export const statusService: IStatusService = {
  getAll: async () => {
    return await statusesModel.getAll();
  },

  create: async (newStatusData) => {
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

  update: async (statusData) => {
    return await statusesModel.update(statusData);
  },

  remove: async (statusId) => {
    return await statusesModel.delete(statusId);
  },
};
