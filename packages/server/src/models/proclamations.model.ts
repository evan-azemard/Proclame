import {
  NewProclamation,
  Proclamation,
  UpdateProclamation,
} from "@/entities/proclamations.entity";
import { proclamations } from "@/schemas";
import { db } from "config/pool";
import { eq } from "drizzle-orm";

export const proclamationModel = {
  getAll: async (): Promise<Proclamation[]> =>
    // SELECT * FROM proclamations
    await db.select().from(proclamations),

  getById: async (
    proclamationId: string
  ): Promise<Proclamation[] | undefined> =>
    // SELECT * FROM proclamations WHERE proclamations.id = ${proclamationId}
    await db
      .select()
      .from(proclamations)
      .where(eq(proclamations.id, proclamationId)),

  create: async (proclamation: NewProclamation): Promise<Proclamation[]> =>
    // INSERT INTO proclamations ... VALUE (...)
    await db.insert(proclamations).values(proclamation).returning(),

  update: async (proclamation: UpdateProclamation): Promise<number> => {
    // UPDATE proclamations SET ... = ... WHERE proclamations.id = ${proclamationId}
    const result = await db
      .update(proclamations)
      .set(proclamation)
      .where(eq(proclamations.id, proclamation.id!));
    return result.rowCount ?? 0;
  },

  delete: async (proclamationId: string): Promise<number> => {
    // DELETE proclamations WHERE proclamations.id = ${proclamationId}
    const result = await db
      .delete(proclamations)
      .where(eq(proclamations.id, proclamationId));
    return result.rowCount ?? 0;
  },
};
