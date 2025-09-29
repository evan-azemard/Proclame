import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { users, statuses } from "@/schemas";

export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 50 }).notNull().unique(),
  statusId: uuid("status_id")
    .references(() => statuses.id, { onDelete: "restrict" })
    .notNull(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "restrict" })
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
