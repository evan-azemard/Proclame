import { roles } from "@/schemas";
import { RoleModel } from "@/types";
import { db } from "@/config";
import { eq } from "drizzle-orm";

export const roleModel: RoleModel = {
  // SELECT * FROM roles
  getAll: async () => await db.select().from(roles),

  // INSERT INTO roles ... VALUE (...)
  create: async (newRoleData) => (await db.insert(roles).values(newRoleData).returning())[0],

  // UPDATE roles SET ... = ... WHERE roles.id = ${roleId}
  update: async (roleId, updateRoleData) => {
    const now = new Date();
    const result = await db
      .update(roles)
      .set({ ...updateRoleData, updatedAt: now })
      .where(eq(roles.id, roleId))
      .returning();
    return result[0];
  },

  // DELETE roles WHERE roles.id = ${roleId}
  delete: async (roleId) =>
    (await db.delete(roles).where(eq(roles.id, roleId)).returning())[0],
};
