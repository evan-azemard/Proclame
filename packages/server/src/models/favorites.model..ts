import { Favorits, NewFavorite } from "@/entities/favorites.entity";
import { favorites } from "@/schemas";
import { db } from "config/pool";
import { eq } from "drizzle-orm";

export const favoritesModel = {
    //SELECT * FROM favorites
  getAll: async (): Promise<Favorits[]> => await db.select().from(favorites),

  // INSERT INTO favorites ... VALUE (...)
  create: async (favorite: NewFavorite): Promise<Favorits[]> =>
    await db.insert(favorites).values(favorite).returning(),

  // DELETE FROM favorites WHERE favorites.id = ${favoriteId}
  delete: async (favoriteId: string): Promise<number> => {
    const result = await db
      .delete(favorites)
      .where(eq(favorites.id, favoriteId));
    return result.rowCount ?? 0;
  },
};
