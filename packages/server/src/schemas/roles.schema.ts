import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const roles = pgTable("roles", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  label: varchar("label", { length: 50 }).notNull().unique(),
  description: varchar("description", { length: 255 }),
});
