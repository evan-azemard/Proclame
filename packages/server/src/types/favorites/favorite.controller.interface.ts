import { Favorit, NewFavorite } from "@/entities";
import { Request, Response } from "express";

export interface FavoriteController {
  getAll: (
    req: Request<{}>,
    res: Response<Favorit[] | { message: string }>
  ) => Promise<void>;

  create: (
    req: Request<{}, {}, NewFavorite>,
    res: Response<Favorit | { message: string }>
  ) => Promise<void>;

  remove: (
    req: Request<{ id: string }, {}, {}>,
    res: Response<{ message: string }>
  ) => Promise<void>;
}
