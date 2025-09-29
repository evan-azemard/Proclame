import { NewProclamation, Proclamation, UpdateProclamation } from "@/entities";

export interface ProclamationService {
  getAll: () => Promise<Proclamation[]>;
  getById: (id: string) => Promise<Proclamation | "PROCLAMATION_NOT_FOUND">;
  create: (
    newProclamationData: NewProclamation
  ) => Promise<Proclamation | "NO_PROCLAMATION_CREATED">;
  update: (
    id: string,
    updateProclamationData: UpdateProclamation
  ) => Promise<Proclamation | "PROCLAMATION_NOT_FOUND">;
  remove: (id: string) => Promise<Proclamation | "PROCLAMATION_NOT_FOUND">;
}
