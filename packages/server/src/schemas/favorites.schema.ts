import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { users, proclamations } from "@/schemas";

export const favorites = pgTable("favorites", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  proclamationId: uuid("proclamation_id")
    .references(() => proclamations.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
