import { env } from "@/config";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

const { JWT_SECRET } = env;

export const isAuthenticated = (
  req: Request & { user: { id: string; roleId: string } },
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.token;

  if (!token) {
    res.status(401).json({ message: "Non authentifié" });
    return;
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET) as {
      id: string;
      role: string;
    };
    req.user = { id: payload.id, roleId: payload.role };
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalide ou expiré" });
  }
};
