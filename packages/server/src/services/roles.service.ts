import { roleModel } from "@/models";
import { RoleService } from "@/types";
import { throwIfDuplicate } from "@/utils/throwIfDuplicate";

export const roleService: RoleService = {
	getById: async (roleId) => await roleModel.getById(roleId) ?? "NO_ROLE",
	
	getAll: async () => await roleModel.getAll(),


	create: async (newRoleData) => {
		try {
			return (await roleModel.create(newRoleData)) ?? "NO_ROLE_CREATED";
		} catch (error: unknown) {
			throwIfDuplicate(error, "CREATING", "ROLE", ["label"]);
			throw new Error("ERROR_CREATING_ROLE: " + String(error));
		}
	},

	update: async (roleId, updateRoleData) => {
		try {
			return (await roleModel.update(roleId, updateRoleData)) ?? "ROLE_NOT_FOUND";
		} catch (error: unknown) {
			throwIfDuplicate(error, "UPDATING", "ROLE", ["label"]);
			throw new Error("ERROR_UPDATING_ROLE: " + String(error));
		}
	},

	remove: async (roleId) =>
		(await roleModel.delete(roleId)) ?? "ROLE_NOT_FOUND",
};

