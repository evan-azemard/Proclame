import { logger } from "@/utils";
import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export function validateParams(schema: ZodSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.params);
    if (!result.success) {
      logger.warn(
        { errors: result.error.errors },
        "Validation des paramètres de la requête a échoué"
      );
      return res.status(400).json({
        message: "Erreur de validation des paramètres de la requête",
        errors: result.error.errors,
      });
    }
    req.params = result.data;
    next();
  };
}
