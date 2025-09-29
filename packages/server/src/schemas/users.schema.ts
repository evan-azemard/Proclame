import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { roles } from "@/schemas";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  username: varchar("username", { length: 50 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  roleId: uuid("role_id")
    .references(() => roles.id, { onDelete: "restrict" })
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  lastLogin: timestamp("lastlogin", { withTimezone: true }),
});
