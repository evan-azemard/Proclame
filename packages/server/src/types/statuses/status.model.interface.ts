import { NewStatus, Status, UpdateStatus } from "@/entities";

export interface StatusesModel {
  getAll: () => Promise<Status[]>;
  create: (newStatusData: NewStatus) => Promise<Status | undefined>;
  update: (
    statusId: string,
    updateStatusData: UpdateStatus
  ) => Promise<Status | undefined>;
  delete: (statusId: string) => Promise<Status | undefined>;
}
