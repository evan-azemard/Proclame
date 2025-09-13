import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { categories } from "./categories.schema";
import { statuses } from "./statuses.schema";
import { users } from "./users.schema";

export const proclamations = pgTable("proclamations", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
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
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
