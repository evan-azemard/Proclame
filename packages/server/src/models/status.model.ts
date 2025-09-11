import { NewStatus, Status, UpdateStatus } from "@/entities/status.entity";
import { status } from "@/schemas";
import { db } from "config/pool";
import { eq } from "drizzle-orm";

export const statusModel = {
  getAll: async (): Promise<Status[]> =>
    // SELECT * FROM status
    await db.select().from(status),

  create: async (statusData: NewStatus): Promise<Status[]> =>
    // INSET INTO status (title, description ) VALUE(${statusData.title},${statusData.description})
    await db.insert(status).values(statusData).returning(),

  update: async (statusData: UpdateStatus): Promise<number> => {
    // UPDATE status SET title = ${statusData.title}, description = ${statusData.description} WHERE status.id = ${statusData.id}
    const result = await db
      .update(status)
      .set(statusData)
      .where(eq(status.id, statusData.id!));
    return result.rowCount ?? 0;
  },

  delete: async (statusId: string): Promise<number> => {
    // DELETE status WHERE status.id = ${statusId}

    const result = await db.delete(status).where(eq(status.id, statusId));
    return result.rowCount ?? 0;
  },
};
