import { Category, NewCategory, UpdateCategory } from "@/entities";

export interface CategoryService {
  getAll: () => Promise<Category[]>;
  getById: (id: string) => Promise<Category | "CATEGORY_NOT_FOUND">;
  create: (
    newCategoryData: NewCategory
  ) => Promise<Category | "NO_CATEGORY_CREATED">;
  update: (
    id: string,
    updateCategoryData: UpdateCategory
  ) => Promise<Category | "CATEGORY_NOT_FOUND">;
  remove: (id: string) => Promise<Category | "CATEGORY_NOT_FOUND">;
}
