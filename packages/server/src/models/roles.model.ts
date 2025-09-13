import { roles } from "@/schemas";
import { RoleModel } from "@/types";
import { db } from "@/config";
import { eq } from "drizzle-orm";

export const roleModel: RoleModel = {
  // SELECT * FROM roles
  getAll: async () => await db.select().from(roles),

  create: async (role) =>
    // INSERT INTO roles ... VALUE (...)
    await db.insert(roles).values(role).returning(),

  update: async (role) => {
    // UPDATE roles SET ... = ... WHERE roles.id = ${roleId}
    const result = await db
      .update(roles)
      .set(role)
      .where(eq(roles.id, role.id!));
    return result.rowCount ?? 0;
  },

  delete: async (roleId) => {
    // DELETE roles WHERE roles.id = ${roleId}
    const result = await db.delete(roles).where(eq(roles.id, roleId));
    return result.rowCount ?? 0;
  },
};
