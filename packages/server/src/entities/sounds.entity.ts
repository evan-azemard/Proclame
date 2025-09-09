import { sounds } from "@/schemas";
export type Sound = typeof sounds.$inferSelect;
export type NewSound = typeof sounds.$inferInsert;
export type UpdateSound = Partial<NewSound>;
