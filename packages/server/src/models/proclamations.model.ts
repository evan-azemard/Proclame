import { proclamations } from "@/schemas";
import { ProclamationModel } from "@/types";
import { db } from "@/config";
import { eq } from "drizzle-orm";

export const proclamationModel: ProclamationModel = {
  // SELECT * FROM proclamations
  getAll: async () => await db.select().from(proclamations),

  // SELECT * FROM proclamations WHERE proclamations.id = ${proclamationId}
  getById: async (proclamationId) =>
    (
      await db
        .select()
        .from(proclamations)
        .where(eq(proclamations.id, proclamationId))
    )[0],

  // INSERT INTO proclamations ... VALUE (...)
  create: async (newProclamationData) =>
    (await db.insert(proclamations).values(newProclamationData).returning())[0],

  // UPDATE proclamations SET ... = ... WHERE proclamations.id = ${proclamationId}
  update: async (proclamationId, updateProclamationData) => {
    const now = new Date();
    const updatedProclamation = await db
      .update(proclamations)
      .set({ ...updateProclamationData, updatedAt: now })
      .where(eq(proclamations.id, proclamationId))
      .returning();
    return updatedProclamation[0];
  },

  // DELETE proclamations WHERE proclamations.id = ${proclamationId}
  delete: async (proclamationId) =>
    (
      await db
        .delete(proclamations)
        .where(eq(proclamations.id, proclamationId))
        .returning()
    )[0],
};
