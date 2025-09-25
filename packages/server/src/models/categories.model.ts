import { categories } from "@/schemas";
import { CategoryModel } from "@/types";
import { db } from "@/config";
import { eq } from "drizzle-orm";

export const categoryModel: CategoryModel = {
  // SELECT * FROM categories
  getAll: async () => await db.select().from(categories),

  // SELECT * FROM categories WHERE categories.id = ${categoryId}
  getById: async (categoryId) =>
    (
      await db.select().from(categories).where(eq(categories.id, categoryId))
    )[0],

  // INSERT INTO categories ... VALUE (...)
  create: async (newCategoryData) =>
    (await db.insert(categories).values(newCategoryData).returning())[0],

  // UPDATE categories SET ... = ... WHERE categories.id = ${categoryId}
  update: async (categoryId, updateCategoryData) => {
    const now = new Date();
    const result = await db
      .update(categories)
      .set({ ...updateCategoryData, updatedAt: now })
      .where(eq(categories.id, categoryId))
      .returning();

    return result[0];
  },

  // DELETE FROM categories WHERE categories.id = ${categoryId}
  delete: async (categoryId) =>
    (
      await db
        .delete(categories)
        .where(eq(categories.id, categoryId))
        .returning()
    )[0],
};
