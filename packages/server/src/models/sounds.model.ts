import { sounds } from "@/schemas";
import { SoundModel } from "@/types";
import { db } from "@/config";
import { eq } from "drizzle-orm";

//SELECT * FROM sounds
export const soundModel: SoundModel = {
  getAll: async () => await db.select().from(sounds),

  // INSERT INTO sounds ... VALUE (...)
  create: async (newSoundData) =>
    (await db.insert(sounds).values(newSoundData).returning())[0],

  // UPDATE sounds SET ... = ... WHERE sounds.id = ${soundId}
  update: async (soundId, updateSoundData) => {
    const now = new Date();
    const result = await db
      .update(sounds)
      .set({ ...updateSoundData, updatedAt: now })
      .where(eq(sounds.id, soundId))
      .returning();
    return result[0];
  },

  // DELETE sounds WHERE sounds.id = ${soundId}
  delete: async (soundId) =>
    (await db.delete(sounds).where(eq(sounds.id, soundId)).returning())[0],
};
