import { Favorit, NewFavorite } from "@/entities";

export interface FavoriteService {
	getAll: () => Promise<Favorit[]>;
	create: (data: NewFavorite) => Promise<Favorit | "NO_FAVORITE_CREATED">;
	remove: (id: string) => Promise<Favorit | "FAVORITE_NOT_FOUND">;
}
