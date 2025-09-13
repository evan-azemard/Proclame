import { categories } from "@/schemas";
import { CategoryModel } from "@/types";
import { db } from "@/config";
import { eq } from "drizzle-orm";

export const categoryModel: CategoryModel = {
  // SELECT * FROM categories
  getAll: async () => await db.select().from(categories),

  getById: async (categoryId) =>
    // SELECT * FROM categories WHERE categories.id = ${categoryId}
    await db.select().from(categories).where(eq(categories.id, categoryId)),

  create: async (category) =>
    // INSERT INTO categories ... VALUE (...)
    await db.insert(categories).values(category).returning(),

  update: async (category) => {
    // UPDATE categories SET ... = ... WHERE categories.id = ${categoryId}
    const result = await db
      .update(categories)
      .set(category)
      .where(eq(categories.id, category.id!));
    return result.rowCount ?? 0;
  },

  delete: async (categoryId) => {
    // DELETE FROM categories WHERE categories.id = ${categoryId}
    const result = await db
      .delete(categories)
      .where(eq(categories.id, categoryId));
    return result.rowCount ?? 0;
  },
};
