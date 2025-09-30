import { userService } from "@/services";
import { UserController } from "@/types";
import { logger } from "@/utils";

export const userController: UserController = {
  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const result = await userService.getUserById(userId);
      if (result === "USER_NOT_FOUND") {
        logger.info({ user: userId }, "Utilisateur introuvable (getUserById)");
        res.status(404).json({ message: "Utilisateur introuvable" });
        return;
      }
      logger.info({ user: userId }, "Récupération utilisateur (getUserById)");
      res.json(result);
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la récupération de l'utilisateur (getUserById)"
      );
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération de l'utilisateur" });
    }
  },

  getAllUsers: async (_req, res) => {
    try {
      const users = await userService.getAll();
      logger.info("Récupération de tous les utilisateurs (getAllUsers)");
      res.json(users);
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la récupération des utilisateurs (getAllUsers)"
      );
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
        logger.info({ user: userId }, "Utilisateur non trouvé (updateUser)");
        res.status(404).json({ message: "Utilisateur non trouvé" });
        return;
      }
      logger.info({ user: userId }, "Mise à jour utilisateur (updateUser)");
      res.json(result);
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la mise à jour de l'utilisateur (updateUser)"
      );
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
        logger.info({ user: userId }, "Utilisateur non trouvé (removeUser)");
        res.status(404).json({ message: "Utilisateur non trouvé" });
        return;
      }
      logger.info({ user: userId }, "Suppression utilisateur (removeUser)");
      res.status(204).send();
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la suppression de l'utilisateur (removeUser)"
      );
      res
        .status(500)
        .json({ message: "Erreur lors de la suppression de l'utilisateur" });
    }
  },
};
