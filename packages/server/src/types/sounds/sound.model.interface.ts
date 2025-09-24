import { NewSound, Sound, UpdateSound } from "@/entities";

export interface SoundModel {
  getAll: () => Promise<Sound[]>;
  create: (newSoundData: NewSound) => Promise<Sound | undefined>;
  update: (soundId: string, updateSoundData: UpdateSound) => Promise<Sound | undefined>;
  delete: (soundId: string) => Promise<Sound | undefined>;
}
