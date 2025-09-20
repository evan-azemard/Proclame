import { NewRole, Role, UpdateRole } from "@/entities";

export interface RoleService {
	getAll: () => Promise<Role[]>;
	create: (newRoleData: NewRole) => Promise<Role | "NO_ROLE_CREATED">;
	update: (roleId: string, updateRoleData: UpdateRole) => Promise<Role | "ROLE_NOT_FOUND">;
	remove: (roleId: string) => Promise<Role | "ROLE_NOT_FOUND">;
}
