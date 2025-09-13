import { Favorits, NewFavorite } from "@/entities/favorites.entity";

export interface FavoriteModel {
  getAll: () => Promise<Favorits[]>;
  create: (favorite: NewFavorite) => Promise<Favorits[]>;
  delete: (favoriteId: string) => Promise<number>;
}