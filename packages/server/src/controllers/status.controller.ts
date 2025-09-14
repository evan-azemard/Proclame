import { statusService } from "@/services";
import { StatusController } from "@/types";
import { Request, Response } from "express";

export const statusController: StatusController = {
  getAllStatuses: async (_req, res) => {
    try {
      const statuses = await statusService.getAll();
      if (statuses === "STATUS_NOT_FOUND") {
        res.status(404).json({ message: "Aucun statut trouvé" });
        return;
      }
      res.json(statuses);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération des statuts" });
    }
  },

  createStatus: async (req, res) => {
    try {
      const newStatusData = req.body;
      const result = await statusService.create(newStatusData);

      if (result === "DUPLICATE_LABEL") {
        res.status(409).json({ message: "Ce label est déjà utilisé" });
        return;
      }
      if (!result) {
        res
          .status(400)
          .json({ message: "Erreur lors de la création du statut" });
        return;
      }
      res.status(201).json(result);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      res.status(500).json({ message: "Erreur lors de la création du statut" });
    }
  },

  updateStatus: async (req, res) => {
    try {
      const updateId = req.params.id;
      const updateStatusData = req.body;
      const result = await statusService.update(updateStatusData);

      if (result === "DUPLICATE_LABEL") {
        res.status(409).json({ message: "Ce label est déjà utilisé" });
        return;
      }

      if (result === "STATUS_NOT_FOUND") {
        res.status(404).json({ message: "Statut non trouvé" });
        return;
      }

      res.json(result);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      res
        .status(500)
        .json({ message: "Erreur lors de la mise à jour du statut" });
    }
  },

  removeStatus: async (req, res) => {
    try {
      const statusId = req.params.id;
      const deletedCount = await statusService.remove(statusId);
      if (deletedCount === 0) {
        res.status(404).json({ message: "Statut non trouvé" });
        return;
      }
      res.status(204).send();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      res
        .status(500)
        .json({ message: "Erreur lors de la suppression du statut" });
    }
  },
};
