import { categoryService } from "@/services";
import { CategoryController } from "@/types";
import { logger } from "@/utils";

export const categoryController: CategoryController = {
  getAll: async (req, res) => {
    try {
      const categories = await categoryService.getAll();
      logger.info("Récupération des catégories");
      res.json(categories);
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la récupération des catégories"
      );
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération des catégories" });
    }
  },

  getById: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const category = await categoryService.getById(categoryId);
      if (category === "CATEGORY_NOT_FOUND") {
        res.status(404).json({ message: "Catégorie non trouvée" });
        return;
      }
      logger.info("Récupération d'une catégorie");
      res.json(category);
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la récupération de la catégorie"
      );
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération de la catégorie" });
    }
  },

  create: async (req, res) => {
    try {
      const newCategoryData = req.body;
      const result = await categoryService.create(newCategoryData);
      if (result === "NO_CATEGORY_CREATED") {
        res.status(400).json({ message: "Aucune catégorie créée" });
        return;
      }
      logger.info("Création d'une catégorie");
      res.json(result);
    } catch (error) {
      const message = (error as Error).message;
      logger.error(
        { err: error },
        "Erreur lors de la création de la catégorie"
      );
      if (message === "ERROR_CREATING_CATEGORY_DUPLICATE_TITLE") {
        res
          .status(409)
          .json({ message: "Le nom de la catégorie existe déjà." });
        return;
      }
      res
        .status(500)
        .json({ message: "Erreur lors de la création de la catégorie" });
    }
  },

  update: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const updatedCategoryData = req.body;
      const result = await categoryService.update(
        categoryId,
        updatedCategoryData
      );
      if (result === "CATEGORY_NOT_FOUND") {
        res.status(404).json({ message: "Catégorie non trouvée" });
        return;
      }
      logger.info("Mise à jour d'une catégorie");
      res.json(result);
    } catch (error) {
      const message = (error as Error).message;
      logger.error(
        { err: error },
        "Erreur lors de la mise à jour de la catégorie"
      );
      if (message === "ERROR_UPDATING_CATEGORY_DUPLICATE_TITLE") {
        res
          .status(409)
          .json({ message: "Le nom de la catégorie existe déjà." });
        return;
      }
      res
        .status(500)
        .json({ message: "Erreur lors de la mise à jour de la catégorie" });
    }
  },

  remove: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const result = await categoryService.remove(categoryId);
      if (result === "CATEGORY_NOT_FOUND") {
        res.status(404).json({ message: "Catégorie non trouvée" });
        return;
      }
      logger.info("Suppression d'une catégorie");
      res.sendStatus(204);
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la suppression de la catégorie"
      );
      res
        .status(500)
        .json({ message: "Erreur lors de la suppression de la catégorie" });
    }
  },
};
