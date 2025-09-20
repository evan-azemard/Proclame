import { categoryModel } from "@/models";
import { CategoryService } from "@/types";
import { throwIfDuplicate } from "@/utils/throwIfDuplicate";

export const categoryService: CategoryService = {
	getAll: async () => await categoryModel.getAll(),

	getById: async (id) => (await categoryModel.getById(id)) ?? "CATEGORY_NOT_FOUND",

	create: async (newCategoryData) => {
		try {
			return (await categoryModel.create(newCategoryData)) ?? "NO_CATEGORY_CREATED";
		} catch (error: unknown) {
			throwIfDuplicate(error, "CREATING", "CATEGORY", ["title"]);
			throw new Error("ERROR_CREATING_CATEGORY: " + String(error));
		}
	},

	update: async (id, updateCategoryData) => {
		try {
			return (await categoryModel.update(id, updateCategoryData)) ?? "CATEGORY_NOT_FOUND";
		} catch (error: unknown) {
			throwIfDuplicate(error, "UPDATING", "CATEGORY", ["title"]);
			throw new Error("ERROR_UPDATING_CATEGORY: " + String(error));
		}
	},

	remove: async (id) => (await categoryModel.delete(id)) ?? "CATEGORY_NOT_FOUND",
};
