import { NextFunction, Request, Response } from "express";

export const isAdmin = (
  req: Request & { user: { id: string; role: string } },
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    res.status(401).json({ message: "Non authentifié" });
    return;
  }

  if (req.user.role !== "admin") {
    res.status(403).json({ message: "Accès refusé" });
    return;
  }

  next();
};
