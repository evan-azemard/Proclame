import { statuses } from "@/schemas";
export type Status = typeof statuses.$inferSelect;
export type NewStatus = typeof statuses.$inferInsert;
export type UpdateStatus = Partial<NewStatus>;
