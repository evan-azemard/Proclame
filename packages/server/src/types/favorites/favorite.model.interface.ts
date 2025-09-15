import { Favorit, NewFavorite } from "@/entities";

export interface FavoriteModel {
  getAll: () => Promise<Favorit[]>;
  create: (NewFavoriteData: NewFavorite) => Promise<Favorit | undefined>;
  delete: (favoriteId: string) => Promise<Favorit | undefined>;
}