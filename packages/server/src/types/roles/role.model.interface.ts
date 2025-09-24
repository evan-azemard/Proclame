import { NewRole, Role, UpdateRole } from "@/entities/";

export interface RoleModel {
  getById: (roleId: string) => Promise<Role | undefined>;

  getAll: () => Promise<Role[]>;
  create: (newRoleData: NewRole) => Promise<Role | undefined>;
  update: (
    roleId: string,
    updateRoleData: UpdateRole
  ) => Promise<Role | undefined>;
  delete: (roleId: string) => Promise<Role | undefined>;
}
