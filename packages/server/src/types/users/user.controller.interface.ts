import { NewUser, PublicUser, UpdateUser } from "@/entities";
import { Request, Response } from "express";

export interface UserController {
  getUserById: (
    req: Request<{ id: string }>,
    res: Response<PublicUser | { message: string }>
  ) => Promise<void>;
  getAllUsers: (
    req: Request,
    res: Response<PublicUser[] | { message: string }>
  ) => Promise<void>;

  updateUser: (
    req: Request<{ id: string }, {}, UpdateUser>,
    res: Response<PublicUser | { message: string }>
  ) => Promise<void>;
  removeUser: (
    req: Request<{ id: string }>,
    res: Response<{ message: string }>
  ) => Promise<void>;
}