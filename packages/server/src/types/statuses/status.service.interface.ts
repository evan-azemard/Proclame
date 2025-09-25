import { NewStatus, Status, UpdateStatus } from "@/entities";

export interface StatusService {
  getAll(): Promise<Status[]>;
  create(newStatusData: NewStatus): Promise<Status | "NO_STATUS_CREATED">;
  update(
    statusId: string,
    statusData: UpdateStatus
  ): Promise<Status | "STATUS_NOT_FOUND">;
  remove(statusId: string): Promise<Status | "STATUS_NOT_FOUND">;
}
