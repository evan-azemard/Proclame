import { Category, NewCategory, UpdateCategory } from "@/entities";

export interface CategoryModel {
  getById: (categoryId: string) => Promise<Category | undefined>;
  getAll: () => Promise<Category[]>;
  create: (newCategoryData: NewCategory) => Promise<Category | undefined>;
  update: (
    categoryId: string,
    updateCategoryData: UpdateCategory
  ) => Promise<Category | undefined>;
  delete: (categoryId: string) => Promise<Category | undefined>;
}
