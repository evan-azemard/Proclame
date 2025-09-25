import { roles } from "@/schemas";

export type Role = typeof roles.$inferSelect;
export type NewRole = typeof roles.$inferInsert;
export type UpdateRole = Partial<NewRole>;
