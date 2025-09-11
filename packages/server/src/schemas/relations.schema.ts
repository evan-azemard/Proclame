import { relations } from "drizzle-orm";
import {
  categories,
  favorites,
  proclamations,
  roles,
  sounds,
  status,
  users,
} from "./index";

export const categoriesRelations = relations(categories, ({ many, one }) => ({
  proclamations: many(proclamations),
  status: one(status, {
    fields: [categories.statusId],
    references: [status.id],
  }),
  user: one(users, {
    fields: [categories.userId],
    references: [users.id],
  }),
}));

export const favoritesRelations = relations(favorites, ({ one }) => ({
  user: one(users, {
    fields: [favorites.userId],
    references: [users.id],
  }),
  proclamation: one(proclamations, {
    fields: [favorites.proclamationId],
    references: [proclamations.id],
  }),
}));

export const proclamationsRelations = relations(
  proclamations,
  ({ many, one }) => ({
    favorites: many(favorites),
    user: one(users, {
      fields: [proclamations.userId],
      references: [users.id],
    }),
    category: one(categories, {
      fields: [proclamations.categoryId],
      references: [categories.id],
    }),
    status: one(status, {
      fields: [proclamations.statusId],
      references: [status.id],
    }),
  })
);

export const rolesRelations = relations(roles, ({ many }) => ({
  users: many(users),
}));

export const soundsRelations = relations(sounds, ({ one }) => ({
  status: one(status, {
    fields: [sounds.statusId],
    references: [status.id],
  }),
}));

export const statusRelations = relations(status, ({ many }) => ({
  proclamations: many(proclamations),
  categories: many(categories),
  sounds: many(sounds),
}));

export const usersRelations = relations(users, ({ many, one }) => ({
  proclamations: many(proclamations),
  categories: many(categories),
  favorites: many(favorites),
  role: one(roles, {
    fields: [users.roleId],
    references: [roles.id],
  }),
}));
