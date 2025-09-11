import {
  Category,
  NewCategory,
  UpdateCategory,
} from "@/entities/categories.entity";
import { categories } from "@/schemas";
import { db } from "config/pool";
import { create } from "domain";
import { eq } from "drizzle-orm";

export const categoryModel = {
  // SELECT * FROM categories
  getAll: async (): Promise<Category[]> => await db.select().from(categories),

  getById: async (categoryId: string): Promise<Category[] | undefined> =>
    // SELECT * FROM categories WHERE categories.id = ${categoryId}
    await db.select().from(categories).where(eq(categories.id, categoryId)),

  create: async (category: NewCategory): Promise<Category[]> =>
    // INSERT INTO categories ... VALUE (...)
    await db.insert(categories).values(category).returning(),

  update: async (category: UpdateCategory): Promise<number> => {
    // UPDATE categories SET ... = ... WHERE categories.id = ${categoryId}
    const result = await db
      .update(categories)
      .set(category)
      .where(eq(categories.id, category.id!));
    return result.rowCount ?? 0;
  },

  delete: async (categoryId: string): Promise<number> => {
    // DELETE FROM categories WHERE categories.id = ${categoryId}
    const result = await db
      .delete(categories)
      .where(eq(categories.id, categoryId));
    return result.rowCount ?? 0;
  },
};
