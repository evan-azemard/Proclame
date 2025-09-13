import { NewStatus, Status, UpdateStatus } from "@/entities";

export interface StatusesModel {
  getAll: () => Promise<Status[]>;
  create: (newStatusData: NewStatus) => Promise<Status | undefined>;
  update: (statusData: UpdateStatus) => Promise<Status | undefined>;
  delete: (statusId: string) => Promise<number>;
}
