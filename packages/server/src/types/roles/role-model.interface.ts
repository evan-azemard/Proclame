import { NewRole, Role, UpdateRole } from "@/entities/roles.entity";

export interface RoleModel {
  getAll: () => Promise<Role[]>;
  create: (role: NewRole) => Promise<Role[]>;
  update: (role: UpdateRole) => Promise<number>;
  delete: (roleId: string) => Promise<number>;
}