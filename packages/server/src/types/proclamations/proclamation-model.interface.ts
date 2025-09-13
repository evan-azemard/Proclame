import { NewProclamation, Proclamation, UpdateProclamation } from "@/entities";

export interface ProclamationModel {
  getAll: () => Promise<Proclamation[]>;
  getById: (proclamationId: string) => Promise<Proclamation[] | undefined>;
  create: (proclamation: NewProclamation) => Promise<Proclamation[]>;
  update: (proclamation: UpdateProclamation) => Promise<number>;
  delete: (proclamationId: string) => Promise<number>;
}