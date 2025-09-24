import { soundService } from "@/services";
import { SoundController } from "@/types";

export const soundController: SoundController = {
  getAll: async (_req, res) => {
    try {
      const sounds = await soundService.getAll();
      res.json(sounds);
    } catch (_error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération des sons" });
    }
  },

  create: async (req, res) => {
    try {
      const newSoundData = req.body;
      const result = await soundService.create(newSoundData);
      if (result === "NO_SOUND_CREATED") {
        res.status(400).json({ message: "Aucun son créé" });
        return;
      }
      res.status(201).json(result);
    } catch (error) {
      const message = (error as Error).message;
      if (
        message === "ERROR_CREATING_SOUND_DUPLICATE_LABEL" ||
        message === "ERROR_CREATING_SOUND_DUPLICATE_ICON_URI" ||
        message === "ERROR_CREATING_SOUND_DUPLICATE_SOUND_URI"
      ) {
        res.status(409).json({ message: "Ce son existe déjà" });
        return;
      }
      res.status(500).json({ message: "Erreur lors de la création du son" });
    }
  },

  update: async (req, res) => {
    try {
      const soundId = req.params.id;
      const updateSoundData = req.body;
      const result = await soundService.update(soundId, updateSoundData);
      if (result === "SOUND_NOT_FOUND") {
        res.status(404).json({ message: "Son non trouvé" });
        return;
      }
      res.json(result);
    } catch (error) {
      const message = (error as Error).message;
      if (
        message === "ERROR_UPDATING_SOUND_DUPLICATE_LABEL" ||
        message === "ERROR_UPDATING_SOUND_DUPLICATE_ICON_URI" ||
        message === "ERROR_UPDATING_SOUND_DUPLICATE_SOUND_URI"
      ) {
        res.status(409).json({ message: "Ce son existe déjà" });
        return;
      }
      res.status(500).json({ message: "Erreur lors de la mise à jour du son" });
    }
  },

  remove: async (req, res) => {
    try {
      const soundId = req.params.id;
      const result = await soundService.remove(soundId);
      if (result === "SOUND_NOT_FOUND") {
        res.status(404).json({ message: "Son non trouvé" });
        return;
      }
      res.sendStatus(204);
    } catch (_error) {
      res.status(500).json({ message: "Erreur lors de la suppression du son" });
    }
  },
};
