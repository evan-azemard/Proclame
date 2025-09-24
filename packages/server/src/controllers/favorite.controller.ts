import { favoriteService } from "@/services";
import { FavoriteController } from "@/types";


export const favoriteController: FavoriteController = {
  getAll: async (req, res) => {
    try {
      const favorites = await favoriteService.getAll();
      res.json(favorites);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération des favoris" });
    }
  },
  create: async (req, res) => {
    try {
      const newFavoriteData = req.body;
      const result = await favoriteService.create(newFavoriteData);
      if (result === "NO_FAVORITE_CREATED") {
        res.status(400).json({ message: "Aucun favori créé" });
        return;
      }
      res.json(result);
    } catch (error) {
      const message = (error as Error).message;
      if (message === "ERROR_CREATING_FAVORITE_DUPLICATE_USER_ID") {
        res.status(409).json({ message: "L'utilisateur a déjà ce favori." });
        return;
      }
      if (message === "ERROR_CREATING_FAVORITE_DUPLICATE_PROCLAMATION_ID") {
        res.status(409).json({ message: "La proclamation est déjà en favori." });
        return;
      }
      res
        .status(500)
        .json({ message: "Erreur lors de la création du favori" });
    }
  },
  remove: async (req, res) => {
    try {
      const favoriteId = req.params.id;
      const result = await favoriteService.remove(favoriteId);
      if (result === "FAVORITE_NOT_FOUND") {
        res.status(404).json({ message: "Favori non trouvé" });
        return;
      }
      res.sendStatus(204);
    } catch (error) {
      
    }
  },
};