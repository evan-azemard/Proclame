import { userService } from "@/services";
import { UserController } from "@/types";

export const userController: UserController = {
  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const result = await userService.getUserById(userId);
      if (result === "USER_NOT_FOUND") {
        res.status(404).json({ message: "Utilisateur introuvable" });
        return;
      }
      res.json(result);
    } catch (_error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération de l'utilisateur" });
    }
  },

  getAllUsers: async (_req, res) => {
    try {
      const users = await userService.getAll();
      res.json(users);
    } catch (_error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération des utilisateurs" });
    }
  },

  updateUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const updateUserData = req.body;
      const result = await userService.update(userId, updateUserData);

      if (result === "USER_NOT_FOUND") {
        res.status(404).json({ message: "Utilisateur non trouvé" });
        return;
      }
      res.json(result);
    } catch (error) {
      const err = error as Error;

      if (err.message.includes("DUPLICATE_EMAIL")) {
        res.status(409).json({ message: "Cet email est déjà utilisé" });
        return;
      }
      if (err.message.includes("DUPLICATE_USERNAME")) {
        res
          .status(409)
          .json({ message: "Ce nom d'utilisateur est déjà utilisé" });
        return;
      }
      res
        .status(500)
        .json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
    }
  },

  removeUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const result = await userService.remove(userId);
      if (result === "USER_NOT_FOUND") {
        res.status(404).json({ message: "Utilisateur non trouvé" });
        return;
      }
      res.status(204).send();
    } catch (_error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la suppression de l'utilisateur" });
    }
  },
};
