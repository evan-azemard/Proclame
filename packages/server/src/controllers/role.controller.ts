import { roleService } from "@/services";
import { RoleController } from "@/types";
import { logger } from "@/utils";

export const roleController: RoleController = {
  getAll: async (req, res) => {
    try {
      const role = await roleService.getAll();
      logger.info("Récupération des rôles (getAll)");
      res.json(role);
    } catch (_error) {
      logger.error(
        { err: _error },
        "Erreur lors de la récupération des rôles (getAll)"
      );
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération des rôles" });
    }
  },

  create: async (req, res) => {
    try {
      const newRoleData = req.body;
      const result = await roleService.create(newRoleData);
      if (result === "NO_ROLE_CREATED") {
        res.status(400).json({ message: "Aucun rôle créé" });
        return;
      }
      logger.info({ roleId: result?.id }, "Création d'un rôle (create)");
      res.status(201).json(result);
    } catch (error) {
      const message = (error as Error).message;
      logger.error(
        { err: error },
        "Erreur lors de la création du rôle (create)"
      );
      if (message === "ERROR_CREATING_ROLE_DUPLICATE_LABEL") {
        res.status(409).json({ message: "Le label du rôle existe déjà." });
        return;
      }
      res.status(500).json({ message: "Erreur lors de la création du rôle" });
    }
  },

  update: async (req, res) => {
    try {
      const roleId = req.params.roleId;
      const updateRoleData = req.body;
      const result = await roleService.update(roleId, updateRoleData);
      if (result === "ROLE_NOT_FOUND") {
        res.status(404).json({ message: "Rôle non trouvé" });
        return;
      }
      logger.info({ roleId }, "Mise à jour d'un rôle (update)");
      res.status(200).json(result);
    } catch (error) {
      const message = (error as Error).message;
      logger.error(
        { err: error },
        "Erreur lors de la mise à jour du rôle (update)"
      );
      if (message === "ERROR_UPDATING_ROLE_DUPLICATE_LABEL") {
        res.status(409).json({ message: "Le label du rôle existe déjà." });
        return;
      }
      res
        .status(500)
        .json({ message: "Erreur lors de la mise à jour du rôle" });
    }
  },

  remove: async (req, res) => {
    try {
      const roleId = req.params.roleId;
      const result = await roleService.remove(roleId);
      if (result === "ROLE_NOT_FOUND") {
        res.status(404).json({ message: "Rôle non trouvé" });
        return;
      }
      logger.info({ roleId }, "Suppression d'un rôle (remove)");
      res.sendStatus(204);
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la suppression du rôle (remove)"
      );
      res
        .status(500)
        .json({ message: "Erreur lors de la suppression du rôle" });
    }
  },
};
