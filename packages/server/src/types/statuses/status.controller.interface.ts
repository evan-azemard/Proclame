import { NewStatus, Status, UpdateStatus } from "@/entities";
import { Request, Response } from "express";

export interface StatusController {
  getAllStatuses(
    req: Request,
    res: Response
  ): Promise<void>;
  createStatus(
    req: Request<{}, {}, NewStatus>,
    res: Response
  ): Promise<void>;
  updateStatus(
    req: Request<{ id: string }, {}, UpdateStatus>,
    res: Response
  ): Promise<void>;
  removeStatus(
    req: Request<{ id: string }>,
    res: Response
  ): Promise<void>;
}
