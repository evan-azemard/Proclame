import { NewUser, PublicUser, UpdateUser } from "@/entities/users.entity";
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
  createUser: (
    req: Request<{}, {}, NewUser>,
    res: Response<PublicUser | { message: string }>
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