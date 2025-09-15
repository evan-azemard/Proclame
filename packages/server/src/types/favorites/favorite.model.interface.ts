import { Favorits, NewFavorite } from "@/entities";

export interface FavoriteModel {
  getAll: () => Promise<Favorits[]>;
  create: (NewFavoriteData: NewFavorite) => Promise<Favorits | undefined>;
  delete: (favoriteId: string) => Promise<Favorits | undefined>;
}