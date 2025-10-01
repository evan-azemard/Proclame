import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { statuses } from "./statuses.schema";

export const sounds = pgTable("sounds", {
  id: uuid("id").primaryKey().defaultRandom(),
  label: varchar("label", { length: 50 }).notNull().unique(),
  description: varchar("description", { length: 255 }),
  iconUri: varchar("icon_uri", { length: 255 }).notNull().unique(),
  soundUri: varchar("sound_uri", { length: 255 }).notNull().unique(),
  statusId: uuid("status_id")
    .references(() => statuses.id, { onDelete: "restrict" })
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
