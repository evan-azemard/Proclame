import { proclamations } from "@/schemas";
import { ProclamationModel } from "@/types";
import { db } from "@/config";
import { eq } from "drizzle-orm";

export const proclamationModel: ProclamationModel = {
  getAll: async () =>
    // SELECT * FROM proclamations
    await db.select().from(proclamations),

  getById: async (proclamationId) =>
    // SELECT * FROM proclamations WHERE proclamations.id = ${proclamationId}
    await db
      .select()
      .from(proclamations)
      .where(eq(proclamations.id, proclamationId)),

  create: async (proclamation) =>
    // INSERT INTO proclamations ... VALUE (...)
    await db.insert(proclamations).values(proclamation).returning(),

  update: async (proclamation) => {
    // UPDATE proclamations SET ... = ... WHERE proclamations.id = ${proclamationId}
    const result = await db
      .update(proclamations)
      .set(proclamation)
      .where(eq(proclamations.id, proclamation.id!));
    return result.rowCount ?? 0;
  },

  delete: async (proclamationId) => {
    // DELETE proclamations WHERE proclamations.id = ${proclamationId}
    const result = await db
      .delete(proclamations)
      .where(eq(proclamations.id, proclamationId));
    return result.rowCount ?? 0;
  },
};
