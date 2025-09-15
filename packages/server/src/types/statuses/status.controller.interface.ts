import { NewStatus, Status, UpdateStatus } from "@/entities";
import { Request, Response } from "express";

export interface StatusController {
  getAllStatuses(
    req: Request,
    res: Response<Status[ ] | {message: string}>
  ): Promise<void>;
  createStatus(
    req: Request<{}, {}, NewStatus>,
    res: Response<Status | {message: string}>
  ): Promise<void>;
  updateStatus(
    req: Request<{ id: string }, {}, UpdateStatus>,
    res: Response<Status | {message: string}>
  ): Promise<void>;
  removeStatus(
    req: Request<{ id: string }>,
    res: Response<{message: string}>
  ): Promise<void>;
}
