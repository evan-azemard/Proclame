import { favorites } from "@/schemas";

export type Favorite = typeof favorites.$inferSelect;
export type NewFavorite = typeof favorites.$inferInsert;
export type updateFavorite = Partial<NewFavorite>;
