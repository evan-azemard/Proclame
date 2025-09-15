import { Category, NewCategory, UpdateCategory } from "@/entities";
import { Request, Response } from "express";
export interface CategoryController {
  getAll: (
    req: Request<{}>,
    res: Response<Category[] | { message: string }>
  ) => Promise<void>;
  getById: (
    req: Request<{ id: string }>,
    res: Response<Category | { message: string }>
  ) => Promise<void>;
  create: (
    req: Request<{}, {}, NewCategory>,
    res: Response<Category | { message: string }>
  ) => Promise<void>;
  update: (
    req: Request<{ id: string }, {}, UpdateCategory>,
    res: Response<Category | { message: string }>
  ) => Promise<void>;
  remove: (
    req: Request<{ id: string }, {}, {}>,
    res: Response<{ message: string }>
  ) => Promise<void>;
}