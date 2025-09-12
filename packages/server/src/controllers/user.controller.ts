import { NewUser, UpdateUser } from "@/entities/users.entity";
import { userService } from "@/services";
import { Request, Response } from "express";

export const getUserById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }
    return res.json(user);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Erreur lors de la récupération de l'utilisateur" });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const user = await userService.getAllUsers();
    if (!user || user.length === 0) {
      return res.status(404).json({ message: "Aucun utilisateur trouvé" });
    }
    return res.json(user);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Erreur lors de la récupération des utilisateurs" });
  }
};

export const createUser = async (
  req: Request<{}, {}, NewUser>,
  res: Response
) => {
  try {
    const user = await userService.createUser(req.body);
    if (!user) {
      return res.status(400).json({ message: "Erreur lors de la création" });
    }
    return res.status(201).json(user);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Erreur lors de la création de l'utilisateur" });
  }
};

export const updateUser = async (
  req: Request<{ id: string }, {}, UpdateUser>,
  res: Response
) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    const result = await userService.updateUser(userId, updatedUser);
    if (result === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    return res.json({ message: "Utilisateur mis à jour avec succès" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
  }
};

export const deleteUser = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const userId = req.params.id;
    const result = await userService.deleteUser(userId);
    if (result === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    return res.json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Erreur lors de la suppression de l'utilisateur" });
  }
};
