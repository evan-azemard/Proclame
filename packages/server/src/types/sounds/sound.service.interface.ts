import { NewSound, Sound, UpdateSound } from "@/entities";

export interface SoundService {
  getAll: () => Promise<Sound[]>;
  create: (soundData: NewSound) => Promise<Sound | "NO_SOUND_CREATED">;
  update: (id: string, data: UpdateSound) => Promise<Sound | "SOUND_NOT_FOUND">;
  remove: (id: string) => Promise<Sound | "SOUND_NOT_FOUND">;
}