import { relations } from "drizzle-orm";
import {
  categories,
  favorites,
  proclamations,
  roles,
  sounds,
  statuses,
  users,
} from "./index";

export const categoriesRelations = relations(categories, ({ many, one }) => ({
  proclamations: many(proclamations),
  status: one(statuses, {
    fields: [categories.statusId],
    references: [statuses.id],
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
    status: one(statuses, {
      fields: [proclamations.statusId],
      references: [statuses.id],
    }),
  })
);

export const rolesRelations = relations(roles, ({ many }) => ({
  users: many(users),
}));

export const soundsRelations = relations(sounds, ({ one }) => ({
  status: one(statuses, {
    fields: [sounds.statusId],
    references: [statuses.id],
  }),
}));

export const statusRelations = relations(statuses, ({ many }) => ({
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
