import { proclamations } from "@/schemas";
export type Proclamation = typeof proclamations.$inferSelect;
export type NewProclamation = typeof proclamations.$inferInsert;
export type UpdateProclamation = Partial<NewProclamation>;
