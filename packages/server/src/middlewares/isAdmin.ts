import { logger } from "@/utils";
import { NextFunction, Request, Response } from "express";

export const isAdmin = (
  req: Request & { user: { id: string; role: string } },
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    logger.warn("Accès refusé - Non authentifié (isAdmin middleware)");
    res.status(401).json({ message: "Non authentifié" });
    return;
  }

  if (req.user.role !== "admin") {
    logger.warn(
      { user: req.user.id, role: req.user.role },
      "Accès refusé - Rôle administrateur requis (isAdmin middleware)"
    );
    res.status(403).json({ message: "Accès refusé" });
    return;
  }

  next();
};
