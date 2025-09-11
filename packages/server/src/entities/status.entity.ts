import { status } from "@/schemas";
export type Status = typeof status.$inferSelect;
export type NewStatus = typeof status.$inferInsert;
export type UpdateStatus = Partial<NewStatus>;
