import { favoritesModel } from "@/models";
import { FavoriteService } from "@/types";
import { throwIfDuplicate } from "@/utils/throwIfDuplicate";

export const favoriteService: FavoriteService = {
	getAll: async () => await favoritesModel.getAll(),

	create: async (data) => {
		try {
			return (await favoritesModel.create(data)) ?? "NO_FAVORITE_CREATED";
		} catch (error: unknown) {
			throwIfDuplicate(error, "CREATING", "FAVORITE", ["user_id", "proclamation_id"]);
			throw new Error("ERROR_CREATING_FAVORITE: " + String(error));
		}
	},

	remove: async (id) => (await favoritesModel.delete(id)) ?? "FAVORITE_NOT_FOUND",
};
