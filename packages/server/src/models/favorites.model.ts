import { favorites } from "@/schemas";
import { FavoriteModel } from "@/types";
import { db } from "config/pool";
import { eq } from "drizzle-orm";

export const favoritesModel: FavoriteModel = {
  //SELECT * FROM favorites
  getAll: async () => await db.select().from(favorites),

  // INSERT INTO favorites ... VALUE (...)
  create: async (favorite) =>
    await db.insert(favorites).values(favorite).returning(),

  // DELETE FROM favorites WHERE favorites.id = ${favoriteId}
  delete: async (favoriteId) => {
    const result = await db
      .delete(favorites)
      .where(eq(favorites.id, favoriteId));
    return result.rowCount ?? 0;
  },
};
