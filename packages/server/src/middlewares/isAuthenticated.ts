import { env } from "@/config";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { logger } from "@/utils";

const { JWT_SECRET } = env;

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.cookies?.accessToken;

  if (!accessToken) {
    logger.warn("Accès refusé - Non authentifié (isAuthenticated middleware)");
    res.status(401).json({ message: "Non authentifié" });
    return;
  }

  try {
    const payload = jwt.verify(accessToken, JWT_SECRET) as { id: string; role: string };
    req.user = { id: payload.id, role: payload.role };
    next();
  } catch (error) {
    logger.warn(
      "Accès refusé - Token invalide ou expiré (isAuthenticated middleware)"
    );
    res.status(401).json({ message: "Token invalide ou expiré" });
  }
};
