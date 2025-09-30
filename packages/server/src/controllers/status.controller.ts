import { statusService } from "@/services";
import { StatusController } from "@/types";
import { logger } from "@/utils";

export const statusController: StatusController = {
  getAllStatuses: async (_req, res) => {
    try {
      const statuses = await statusService.getAll();
      logger.info("Récupération des statuts (getAllStatuses)");
      res.json(statuses);
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la récupération des statuts (getAllStatuses)"
      );
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération des statuts" });
    }
  },

  createStatus: async (req, res) => {
    try {
      const newStatusData = req.body;
      const result = await statusService.create(newStatusData);
      if (result === "NO_STATUS_CREATED") {
        logger.info("Aucun statut créé (createStatus)");
        res.status(400).json({ message: "Aucun statut créé" });
        return;
      }
      logger.info(
        { statusId: result?.id },
        "Création d'un statut (createStatus)"
      );
      res.status(201).json(result);
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la création du statut (createStatus)"
      );
      const err = error as Error;
      if (err.message.includes("DUPLICATE_LABEL")) {
        res.status(409).json({ message: "Ce libellé est déjà utilisé" });
        return;
      }
      res.status(500).json({ message: "Erreur lors de la création du statut" });
    }
  },

  updateStatus: async (req, res) => {
    try {
      const updateId = req.params.id;
      const updateStatusData = req.body;
      const result = await statusService.update(updateId, updateStatusData);
      if (result === "STATUS_NOT_FOUND") {
        logger.info({ statusId: updateId }, "Statut non trouvé (updateStatus)");
        res.status(404).json({ message: "Statut non trouvé" });
        return;
      }
      logger.info(
        { statusId: updateId },
        "Mise à jour d'un statut (updateStatus)"
      );
      res.json(result);
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la mise à jour du statut (updateStatus)"
      );
      const err = error as Error;
      if (err.message.includes("DUPLICATE_LABEL")) {
        res.status(409).json({ message: "Ce libellé est déjà utilisé" });
        return;
      }
      res
        .status(500)
        .json({ message: "Erreur lors de la mise à jour du statut" });
    }
  },

  removeStatus: async (req, res) => {
    try {
      const statusId = req.params.id;
      const deletedCount = await statusService.remove(statusId);
      if (deletedCount === "STATUS_NOT_FOUND") {
        logger.info({ statusId }, "Statut non trouvé (removeStatus)");
        res.status(404).json({ message: "Statut non trouvé" });
        return;
      }
      logger.info({ statusId }, "Suppression d'un statut (removeStatus)");
      res.status(204).send();
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la suppression du statut (removeStatus)"
      );
      res
        .status(500)
        .json({ message: "Erreur lors de la suppression du statut" });
    }
  },
};
