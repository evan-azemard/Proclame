import { statusesModel } from "@/models";
import { StatusService } from "@/types";
import { throwIfDuplicate } from "@/utils/throwIfDuplicate";

export const statusService: StatusService = {
  getAll: async () => await statusesModel.getAll(),

  create: async (newStatusData) => {
    try {
      return (await statusesModel.create(newStatusData)) ?? "NO_STATUS_CREATED";
    } catch (error: unknown) {
      throwIfDuplicate(error, "CREATING", "STATUS", ["label"]);
      throw new Error("ERROR_CREATING_STATUS: " + String(error));
    }
  },

  update: async (statusId, statusData) => {
    try {
      return (
        (await statusesModel.update(statusId, statusData)) ?? "STATUS_NOT_FOUND"
      );
    } catch (error: unknown) {
      throwIfDuplicate(error, "UPDATING", "STATUS", ["label"]);
      throw new Error("ERROR_UPDATING_STATUS: " + String(error));
    }
  },

  remove: async (statusId) =>
    (await statusesModel.delete(statusId)) ?? "STATUS_NOT_FOUND",
};
