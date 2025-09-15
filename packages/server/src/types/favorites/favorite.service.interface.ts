import { Favorits, NewFavorite } from "@/entities";

export interface FavoriteService {
	getAll: () => Promise<Favorits[]>;
	create: (data: NewFavorite) => Promise<Favorits | "NO_FAVORITE_CREATED">;
	remove: (id: string) => Promise<Favorits | "FAVORITE_NOT_FOUND">;
}
