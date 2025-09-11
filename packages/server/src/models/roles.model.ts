import { NewRole, Role, UpdateRole } from "@/entities/roles.entity";
import { roles } from "@/schemas";
import { db } from "config/pool";
import { eq } from "drizzle-orm";

export const roleModel = {
  // SELECT * FROM roles
  getAll: async (): Promise<Role[]> => await db.select().from(roles),

  create: async (role: NewRole): Promise<Role[]> =>
    // INSERT INTO roles ... VALUE (...)
    await db.insert(roles).values(role).returning(),

  update: async (role: UpdateRole): Promise<number> => {
    // UPDATE roles SET ... = ... WHERE roles.id = ${roleId}
    const result = await db
      .update(roles)
      .set(role)
      .where(eq(roles.id, role.id!));
    return result.rowCount ?? 0;
  },

  delete: async (roleId: string): Promise<number> => {
    // DELETE roles WHERE roles.id = ${roleId}
    const result = await db.delete(roles).where(eq(roles.id, roleId));
    return result.rowCount ?? 0;
  },
};
