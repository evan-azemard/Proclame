import { Category, NewCategory, UpdateCategory } from "@/entities";

export interface CategoryModel {
  getAll: () => Promise<Category[]>;
  getById: (categoryId: string) => Promise<Category[] | undefined>;
  create: (category: NewCategory) => Promise<Category[]>;
  update: (category: UpdateCategory) => Promise<number>;
  delete: (categoryId: string) => Promise<number>;
}