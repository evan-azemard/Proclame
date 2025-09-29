import { NewUser } from "@/entities";
import { Request, Response } from "express";

export interface AuthController {
  me: (
    req: Request & { user: { id: string; roleId: string } },
    res: Response
  ) => Promise<void>;
  register: (req: Request<{}, {}, NewUser>, res: Response) => Promise<void>;
  login: (
    req: Request<{}, {}, { email: string; password: string }>,
    res: Response
  ) => Promise<void>;
}
