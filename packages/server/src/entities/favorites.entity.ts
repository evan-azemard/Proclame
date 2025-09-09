import { favorites } from "@/schemas";

export type Favorits = typeof favorites.$inferSelect;
export type NewFavorite = typeof favorites.$inferInsert;
export type updateFavorite = Partial<NewFavorite>;
