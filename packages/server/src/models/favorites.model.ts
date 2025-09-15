import { favorites } from "@/schemas";
import { FavoriteModel } from "@/types";
import { db } from "@/config";
import { eq } from "drizzle-orm";

export const favoritesModel: FavoriteModel = {
  //SELECT * FROM favorites
  getAll: async () => await db.select().from(favorites),

  // INSERT INTO favorites ... VALUE (...)
  create: async (newFavoriteData) =>
    (await db.insert(favorites).values(newFavoriteData).returning())[0],

  // DELETE FROM favorites WHERE favorites.id = ${favoriteId}
  delete: async (favoriteId) =>
    (
      await db.delete(favorites).where(eq(favorites.id, favoriteId)).returning()
    )[0],
};
