import { sounds } from "@/schemas";
import { SoundModel } from "@/types";
import { db } from "config/pool";
import { eq } from "drizzle-orm";

export const soundModel: SoundModel = {
  //SELECT * FROM sounds
  getAll: async () => await db.select().from(sounds),

  create: async (sound) =>
    // INSERT INTO sounds ... VALUE (...)
    await db.insert(sounds).values(sound).returning(),

  update: async (sound) => {
    // UPDATE sounds SET ... = ... WHERE sounds.id = ${soundId}
    const result = await db
      .update(sounds)
      .set(sound)
      .where(eq(sounds.id, sound.id!));
    return result.rowCount ?? 0;
  },

  delete: async (soundId) => {
    // DELETE sounds WHERE sounds.id = ${soundId}
    const result = await db.delete(sounds).where(eq(sounds.id, soundId));
    return result.rowCount ?? 0;
  },
};
