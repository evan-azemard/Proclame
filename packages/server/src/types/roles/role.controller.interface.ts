import { Role, UpdateRole } from "@/entities";
import { Request, Response } from "express";

export interface RoleController {
  getAll: (
    req: Request,
    res: Response<Role[] | { message: string }>
  ) => Promise<void>;
  create: (
    req: Request<{}, {}, Role>,
    res: Response<Role | { message: string }>
  ) => Promise<void>;
  update: (
    req: Request<{ roleId: string }, {}, UpdateRole>,
    res: Response<Role | { message: string }>
  ) => Promise<void>;
  remove: (req: Request, res: Response<{ message: string }>) => Promise<void>;
}
