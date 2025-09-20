import { statuses } from "@/schemas";
import { StatusesModel } from "@/types";
import { db } from "@/config";
import { eq } from "drizzle-orm";

export const statusesModel: StatusesModel = {
  // SELECT * FROM status
  getAll: async () => await db.select().from(statuses),

  // INSERT INTO status (title, description ) VALUE(${statusData.title},${statusData.description})
  create: async (newStatusData) =>
    (await db.insert(statuses).values(newStatusData).returning())[0],

  update: async (statusId, updateStatusData) => {
    // UPDATE status SET title = ${statusData.title}, description = ${statusData.description} WHERE status.id = ${statusData.id}
    const now = new Date();
    const updatedStatus = await db
      .update(statuses)
      .set({ ...updateStatusData, updatedAt: now })
      .where(eq(statuses.id, statusId))
      .returning();
    return updatedStatus[0];
  },

  // DELETE status WHERE status.id = ${statusId}
  delete: async (statusId) =>
    (await db.delete(statuses).where(eq(statuses.id, statusId)).returning())[0],
};
