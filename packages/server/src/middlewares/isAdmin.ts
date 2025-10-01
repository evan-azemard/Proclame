import { logger } from "@/utils/logger";
import { NextFunction, Request, Response } from "express";
import { isAuthenticated } from "./isAuthenticated";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  isAuthenticated(req, res, function () {
    const role = req.user?.role;
    if (!role || role.toUpperCase() !== "ADMIN") {
      logger.warn(
        { user: req.user?.id, role },
        "Accès refusé - Rôle administrateur requis (isAdmin middleware)"
      );
      res.status(403).json({ message: "Accès refusé" });
      return;
    }

    next();
  });
};
