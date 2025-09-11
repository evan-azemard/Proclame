import { NewSound, Sound, UpdateSound } from "@/entities/sounds.entity";
import { sounds } from "@/schemas";
import { db } from "config/pool";
import { eq } from "drizzle-orm";

export const soundModel = {
  //SELECT * FROM sounds
  getAll: async (): Promise<Sound[]> => await db.select().from(sounds),

  create: async (sound: NewSound): Promise<Sound[]> =>
    // INSERT INTO sounds ... VALUE (...)
    await db.insert(sounds).values(sound).returning(),

  update: async (sound: UpdateSound): Promise<number> => {
    // UPDATE sounds SET ... = ... WHERE sounds.id = ${soundId}
    const result = await db
      .update(sounds)
      .set(sound)
      .where(eq(sounds.id, sound.id!));
    return result.rowCount ?? 0;
  },

  delete: async (soundId: string): Promise<number> => {
    // DELETE sounds WHERE sounds.id = ${soundId}
    const result = await db.delete(sounds).where(eq(sounds.id, soundId));
    return result.rowCount ?? 0;
  },
};
