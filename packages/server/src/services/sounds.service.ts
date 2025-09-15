import { soundModel } from "@/models";
import { SoundService } from "@/types";
import { throwIfDuplicate } from "@/utils/throwIfDuplicate";

export const soundService: SoundService = {
  getAll: async () => await soundModel.getAll(),

  create: async (soundData) => {
    try {
      return (await soundModel.create(soundData)) ?? "NO_SOUND_CREATED";
    } catch (error: unknown) {
      throwIfDuplicate(error, "CREATING", "SOUND", [
        "label",
        "icon_uri",
        "sound_uri",
      ]);
      throw new Error("ERROR_CREATING_SOUND: " + String(error));
    }
  },

  update: async (soundId, soundData) => {
    try {
      return (await soundModel.update(soundId, soundData)) ?? "SOUND_NOT_FOUND";
    } catch (error: unknown) {
      throwIfDuplicate(error, "UPDATING", "SOUND", [
        "label",
        "icon_uri",
        "sound_uri",
      ]);
      throw new Error(`ERROR_UPDATING_SOUND: ${String(error)}`);
    }
  },

  remove: async (soundId) =>
    (await soundModel.delete(soundId)) ?? "SOUND_NOT_FOUND",
};
