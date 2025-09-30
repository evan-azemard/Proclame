import { soundService } from "@/services";
import { SoundController } from "@/types";
import { logger } from "@/utils";

export const soundController: SoundController = {
  getAll: async (_req, res) => {
    try {
      const sounds = await soundService.getAll();
      logger.info("Récupération des sons (getAll)");
      res.json(sounds);
    } catch (_error) {
      logger.error(
        { err: _error },
        "Erreur lors de la récupération des sons (getAll)"
      );
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
      logger.info({ soundId: result?.id }, "Création d'un son (create)");
      res.status(201).json(result);
    } catch (error) {
      const message = (error as Error).message;
      logger.error(
        { err: error },
        "Erreur lors de la création du son (create)"
      );
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
      logger.info({ soundId }, "Mise à jour d'un son (update)");
      res.json(result);
    } catch (error) {
      const message = (error as Error).message;
      logger.error(
        { err: error },
        "Erreur lors de la mise à jour du son (update)"
      );
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
      logger.info({ soundId }, "Suppression d'un son (remove)");
      res.sendStatus(204);
    } catch (_error) {
      logger.error(
        { err: _error },
        "Erreur lors de la suppression du son (remove)"
      );
      res.status(500).json({ message: "Erreur lors de la suppression du son" });
    }
  },
};
