import { relations } from "drizzle-orm";
import * as schemas from "@/schemas";

export const categoriesRelations = relations(schemas.categories, ({ many, one }) => ({
  proclamations: many(schemas.proclamations),
  status: one(schemas.statuses, {
    fields: [schemas.categories.statusId],
    references: [schemas.statuses.id],
  }),
  user: one(schemas.users, {
    fields: [schemas.categories.userId],
    references: [schemas.users.id],
  }),
}));

export const favoritesRelations = relations(schemas.favorites, ({ one }) => ({
  user: one(schemas.users, {
    fields: [schemas.favorites.userId],
    references: [schemas.users.id],
  }),
  proclamation: one(schemas.proclamations, {
    fields: [schemas.favorites.proclamationId],
    references: [schemas.proclamations.id],
  }),
}));

export const proclamationsRelations = relations(
  schemas.proclamations,
  ({ many, one }) => ({
    favorites: many(schemas.favorites),
    user: one(schemas.users, {
      fields: [schemas.proclamations.userId],
      references: [schemas.users.id],
    }),
    category: one(schemas.categories, {
      fields: [schemas.proclamations.categoryId],
      references: [schemas.categories.id],
    }),
    status: one(schemas.statuses, {
      fields: [schemas.proclamations.statusId],
      references: [schemas.statuses.id],
    }),
  })
);

export const rolesRelations = relations(schemas.roles, ({ many }) => ({
  users: many(schemas.users),
}));

export const soundsRelations = relations(schemas.sounds, ({ one }) => ({
  status: one(schemas.statuses, {
    fields: [schemas.sounds.statusId],
    references: [schemas.statuses.id],
  }),
}));

export const statusRelations = relations(schemas.statuses, ({ many }) => ({
  proclamations: many(schemas.proclamations),
  categories: many(schemas.categories),
  sounds: many(schemas.sounds),
}));

export const usersRelations = relations(schemas.users, ({ many, one }) => ({
  proclamations: many(schemas.proclamations),
  categories: many(schemas.categories),
  favorites: many(schemas.favorites),
  role: one(schemas.roles, {
    fields: [schemas.users.roleId],
    references: [schemas.roles.id],
  }),
}));
