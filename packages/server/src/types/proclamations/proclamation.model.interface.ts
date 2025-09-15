import { NewProclamation, Proclamation, UpdateProclamation } from "@/entities";

export interface ProclamationModel {
  getById: (proclamationId: string) => Promise<Proclamation | undefined>;
  getAll: () => Promise<Proclamation[]>;
  create: (
    newProclamationData: NewProclamation
  ) => Promise<Proclamation | undefined>;
  update: (
    proclamationId: string,
    updateProclamationData: UpdateProclamation
  ) => Promise<Proclamation | undefined>;
  delete: (proclamationId: string) => Promise<Proclamation | undefined>;
}
