import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { users, statuses, categories } from "@/schemas";

export const proclamations = pgTable("proclamations", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 50 }).notNull().unique(),
  description: text("description").notNull(),
  categoryId: uuid("category_id")
    .references(() => categories.id, {
      onDelete: "restrict",
    })
    .notNull(),
  statusId: uuid("status_id")
    .references(() => statuses.id, {
      onDelete: "restrict",
    })
    .notNull(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "restrict" })
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
