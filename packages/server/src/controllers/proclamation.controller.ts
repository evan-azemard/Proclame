import { proclamationService } from "@/services";
import { ProclamationController } from "@/types";
import { logger } from "@/utils";

export const proclamationController: ProclamationController = {
  getAll: async (req, res) => {
    try {
      const proclamations = await proclamationService.getAll();
      logger.info("Récupération de toutes les proclamations (getAll)");
      res.json(proclamations);
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la récupération des proclamations (getAll)"
      );
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération des proclamations" });
    }
  },
  getById: async (req, res) => {
    try {
      const proclamationId = req.params.id;
      const result = await proclamationService.getById(proclamationId);
      if (result === "PROCLAMATION_NOT_FOUND") {
        res.status(404).json({ message: "Proclamation non trouvée" });
        return;
      }
      logger.info(
        { proclamationId },
        "Récupération d'une proclamation (getById)"
      );
      res.json(result);
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la récupération de la proclamation (getById)"
      );
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération de la proclamation" });
    }
  },
  create: async (req, res) => {
    try {
      const newProclamationData = req.body;
      const result = await proclamationService.create(newProclamationData);
      if (result === "NO_PROCLAMATION_CREATED") {
        res.status(400).json({ message: "Aucune proclamation créée" });
        return;
      }
      logger.info(
        { proclamationId: result?.id },
        "Création d'une proclamation (create)"
      );
      res.json(result);
    } catch (error) {
      const message = (error as Error).message;
      logger.error(
        { err: error },
        "Erreur lors de la création de la proclamation (create)"
      );
      if (message === "ERROR_CREATING_PROCLAMATION_DUPLICATE_TITLE") {
        res
          .status(409)
          .json({ message: "Le titre de la proclamation existe déjà." });
        return;
      }
      res
        .status(500)
        .json({ message: "Erreur lors de la création de la proclamation" });
    }
  },
  update: async (req, res) => {
    try {
      const proclamationId = req.params.id;
      const updatedData = req.body;
      const result = await proclamationService.update(
        proclamationId,
        updatedData
      );
      if (result === "PROCLAMATION_NOT_FOUND") {
        res.status(404).json({ message: "Proclamation non trouvée" });
        return;
      }
      logger.info(
        { proclamationId },
        "Mise à jour d'une proclamation (update)"
      );
      res.json(result);
    } catch (error) {
      const message = (error as Error).message;
      logger.error(
        { err: error },
        "Erreur lors de la mise à jour de la proclamation (update)"
      );
      if (message === "ERROR_UPDATING_PROCLAMATION_DUPLICATE_TITLE") {
        res
          .status(409)
          .json({ message: "Le titre de la proclamation existe déjà." });
        return;
      }
      res
        .status(500)
        .json({ message: "Erreur lors de la mise à jour de la proclamation" });
    }
  },
  remove: async (req, res) => {
    try {
      const proclamationId = req.params.id;
      const result = await proclamationService.remove(proclamationId);
      if (result === "PROCLAMATION_NOT_FOUND") {
        res.status(404).json({ message: "Proclamation non trouvée" });
        return;
      }
      logger.info(
        { proclamationId },
        "Suppression d'une proclamation (remove)"
      );
      res.sendStatus(204);
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la suppression de la proclamation (remove)"
      );
      res
        .status(500)
        .json({ message: "Erreur lors de la suppression de la proclamation" });
    }
  },
};
