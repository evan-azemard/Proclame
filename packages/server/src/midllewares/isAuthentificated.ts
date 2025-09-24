import { env } from "@/config";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const { JWT_SECRET } = env;

export const isAuthentificated = (
  req: Request & { user: { id: string; roleId: string } },
  res: Response
) => {
  const accessToken = req.cookies?.accessToken;

  if (!accessToken) {
    res.status(401).json({ message: "Non authentifié" });
    return;
  }

  try {
    const payload = jwt.verify(accessToken, JWT_SECRET) as {
      id: string;
      role: string;
    };
    req.user = { id: payload.id, roleId: payload.role };
  } catch (error) {
    res.status(401).json({ message: "Token invalide ou expiré" });
  }
};
