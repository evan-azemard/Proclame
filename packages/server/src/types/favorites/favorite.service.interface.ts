import { Favorite, NewFavorite } from "@/entities";

export interface FavoriteService {
	getAll: () => Promise<Favorite[]>;
	create: (data: NewFavorite) => Promise<Favorite | "NO_FAVORITE_CREATED">;
	remove: (id: string) => Promise<Favorite | "FAVORITE_NOT_FOUND">;
}
