import { Favorite, NewFavorite } from "@/entities";

export interface FavoriteModel {
  getAll: () => Promise<Favorite[]>;
  create: (NewFavoriteData: NewFavorite) => Promise<Favorite | undefined>;
  delete: (favoriteId: string) => Promise<Favorite | undefined>;
}
