import { NewStatus, Status, UpdateStatus } from "@/entities/statuses.entity";
import { statuses } from "@/schemas";
import { db } from "config/pool";
import { eq } from "drizzle-orm";

export const statusesModel = {
  getAll: async (): Promise<Status[]> =>
    // SELECT * FROM status
    await db.select().from(statuses),

  create: async (newStatusData: NewStatus): Promise<Status | undefined> => {
    // INSERT INTO status (title, description ) VALUE(${statusData.title},${statusData.description})
    const createdStatus = await db.insert(statuses).values(newStatusData).returning();
    return createdStatus[0];
  },

  update: async (statusData: UpdateStatus): Promise<Status | undefined> => {
    // UPDATE status SET title = ${statusData.title}, description = ${statusData.description} WHERE status.id = ${statusData.id}
    const now = new Date();
    const updatedStatus = await db
      .update(statuses)
      .set({ ...statusData, updatedAt: now })
      .where(eq(statuses.id, statusData.id!))
      .returning();
    return updatedStatus[0];
  },

  delete: async (statusId: string): Promise<number> => {
    // DELETE status WHERE status.id = ${statusId}
    const result = await db.delete(statuses).where(eq(statuses.id, statusId));
    return result.rowCount ?? 0;
  },
};
