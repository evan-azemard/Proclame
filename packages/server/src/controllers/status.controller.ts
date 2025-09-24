import { statusService } from "@/services";
import { StatusController } from "@/types";

export const statusController: StatusController = {
  getAllStatuses: async (_req, res) => {
    try {
      const statuses = await statusService.getAll();
      res.json(statuses);
    } catch (_error) {
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
        res.status(400).json({ message: "Aucun statut créé" });
        return;
      }
      res.status(201).json(result);
    } catch (error) {
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
        res.status(404).json({ message: "Statut non trouvé" });
        return;
      }

      res.json(result);
    } catch (error) {
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
        res.status(404).json({ message: "Statut non trouvé" });
        return;
      }
      res.status(204).send();
    } catch (_error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la suppression du statut" });
    }
  },
};
