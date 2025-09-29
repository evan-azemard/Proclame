import { proclamationService } from "@/services";
import { ProclamationController } from "@/types";

export const proclamationController: ProclamationController = {
  getAll: async (req, res) => {
    try {
      const proclamations = await proclamationService.getAll();
      res.json(proclamations);
    } catch (error) {
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
      res.json(result);
    } catch (error) {
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
      res.json(result);
    } catch (error) {
      const message = (error as Error).message;
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
      res.json(result);
    } catch (error) {
      const message = (error as Error).message;
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
      res.sendStatus(204);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la suppression de la proclamation" });
    }
  },
};
