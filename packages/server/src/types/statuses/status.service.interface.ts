import { NewStatus, Status, UpdateStatus } from "@/entities";

export interface StatusService {
  getAll(): Promise<Status[] | "STATUS_NOT_FOUND">;
  create(newStatusData: NewStatus): Promise<Status | "DUPLICATE_LABEL">;
  update(statusData: UpdateStatus): Promise<Status | "DUPLICATE_LABEL" | "STATUS_NOT_FOUND">;
  remove(statusId: string): Promise<number>;
}
