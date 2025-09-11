import { categories } from "../schemas";

export type Category = typeof categories.$inferSelect;
export type NewCategory = typeof categories.$inferInsert;
export type UpdateCategory = Partial<NewCategory>;
