import { proclamationModel } from "@/models";
import { ProclamationService } from "@/types";
import { throwIfDuplicate } from "@/utils/throwIfDuplicate";

export const proclamationService: ProclamationService = {
  getAll: async () => await proclamationModel.getAll(),

  getById: async (id) =>
    (await proclamationModel.getById(id)) ?? "PROCLAMATION_NOT_FOUND",

  create: async (newProclamationData) => {
    try {
      return (
        (await proclamationModel.create(newProclamationData)) ??
        "NO_PROCLAMATION_CREATED"
      );
    } catch (error: unknown) {
      throwIfDuplicate(error, "CREATING", "PROCLAMATION", ["title"]);
      throw new Error("ERROR_CREATING_PROCLAMATION: " + String(error));
    }
  },

  update: async (id, updateProclamationData) => {
    try {
      return (
        (await proclamationModel.update(id, updateProclamationData)) ??
        "PROCLAMATION_NOT_FOUND"
      );
    } catch (error: unknown) {
      throwIfDuplicate(error, "UPDATING", "PROCLAMATION", ["title"]);
      throw new Error("ERROR_UPDATING_PROCLAMATION: " + String(error));
    }
  },

  remove: async (id) =>
    (await proclamationModel.delete(id)) ?? "PROCLAMATION_NOT_FOUND",
};
