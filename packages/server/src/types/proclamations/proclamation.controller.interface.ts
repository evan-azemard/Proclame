import { NewProclamation, Proclamation, UpdateProclamation } from "@/entities";
import { Request, Response } from "express";
export interface ProclamationController {
  getAll: (
    req: Request<{}>,
    res: Response<Proclamation[] | { message: string }>
  ) => Promise<void>;
  getById: (
    req: Request<{ id: string }>,
    res: Response<Proclamation | { message: string }>
  ) => Promise<void>;
  create: (
    req: Request<{}, {}, NewProclamation>,
    res: Response<Proclamation | { message: string }>
  ) => Promise<void>;
  update: (
    req: Request<{ id: string }, {}, UpdateProclamation>,
    res: Response<Proclamation | { message: string }>
  ) => Promise<void>;
  remove: (
    req: Request<{ id: string }, {}, {}>,
    res: Response<{ message: string }>
  ) => Promise<void>;
}
