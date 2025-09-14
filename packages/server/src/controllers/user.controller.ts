import { userService } from "@/services";
import { UserController } from "@/types";


export const userController: UserController = {
  getUserById: async (req, res) => {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) {
        res.status(404).json({ message: "Utilisateur introuvable" });
        return;
      }
      res.json(user);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      res
        .status(400)
        .json({ message: "Erreur lors de la récupération de l'utilisateur" });
    }
  },

  getAllUsers: async (_req, res) => {
    try {
      const users = await userService.getAll();
      if (users === "USER_NOT_FOUND") {
        res.status(404).json({ message: "Aucun utilisateur trouvé" });
        return;
      }
      res.json(users);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      res
        .status(400)
        .json({ message: "Erreur lors de la récupération des utilisateurs" });
    }
  },

  createUser: async (req, res) => {
    try {
      const newUserData = req.body;
      const result = await userService.create(newUserData);
      if (result === "DUPLICATE_EMAIL") {
        res.status(409).json({ message: "Cet email est déjà utilisé" });
        return;
      }
      if (result === "DUPLICATE_USERNAME") {
        res
          .status(409)
          .json({ message: "Ce nom d'utilisateur est déjà utilisé" });
        return;
      }
      if (!result) {
        res
          .status(400)
          .json({ message: "Erreur lors de la création de l'utilisateur" });
        return;
      }
      res.status(201).json(result);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      res
        .status(500)
        .json({ message: "Erreur lors de la création de l'utilisateur" });
    }
  },

  updateUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const updateUserData = req.body;
      const result = await userService.update(userId, updateUserData);

      if (result === "DUPLICATE_EMAIL") {
        res.status(409).json({ message: "Cet email est déjà utilisé" });
        return;
      }
      if (result === "DUPLICATE_USERNAME") {
        res
          .status(409)
          .json({ message: "Ce nom d'utilisateur est déjà utilisé" });
        return;
      }
      if (result === "USER_NOT_FOUND") {
        res.status(404).json({ message: "Utilisateur non trouvé" });
        return;
      }
      res.json(result);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      res
        .status(500)
        .json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
    }
  },

  removeUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const deletedCount = await userService.remove(userId);
      if (deletedCount === 0) {
        res.status(404).json({ message: "Utilisateur non trouvé" });
        return;
      }
      res.status(204).send();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      res
        .status(500)
        .json({ message: "Erreur lors de la suppression de l'utilisateur" });
    }
  },
};
