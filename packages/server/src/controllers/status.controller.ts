import { statusService } from "@/services";
import { Request, Response } from "express";

export const getAllStatuses = async (req: Request, res: Response) => {
  try {
    const statuses = await statusService.getAll();
    if (!statuses || statuses.length === 0) {
      return res.status(404).json({ message: "Aucun statut trouvé" });
    }
    return res.json(statuses);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur lors de la récupération des statuts" });
  }
};
export const createStatus = async (req: Request, res: Response) => {
  try {
    const newStatusData = req.body;
    const createdStatus = await statusService.create(newStatusData);

    if (!createdStatus) {
      return res
        .status(400)
        .json({ message: "Erreur lors de la création du statut" });
    }
    return res.status(201).json(createdStatus);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur lors de la création du statut" });
  }
};

export const updateStatus = async (req: Request, res: Response) => {
  try {
    const updateStatusData = req.body;
    const updatedStatus = await statusService.update(updateStatusData);
    if (!updatedStatus) {
      return res
        .status(400)
        .json({ message: "Erreur lors de la mise à jour du statut" });
    }
    return res.status(200).json(updatedStatus);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour du statut" });
  }
};

export const removeStatus = async (req: Request, res: Response) => {
  try {
    const statusId = req.params.id;
    const deletedCount = await statusService.remove(statusId);
    if (deletedCount === 0) {
      return res.status(404).json({ message: "Statut non trouvé" });
    }
    return res.status(204).send();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur lors de la suppression du statut" });
  }
};
