import { NewSound, Sound, UpdateSound } from "@/entities/sounds.entity";

export interface SoundModel {
  getAll: () => Promise<Sound[]>;
  create: (sound: NewSound) => Promise<Sound[]>;
  update: (sound: UpdateSound) => Promise<number>;
  delete: (soundId: string) => Promise<number>;
}
