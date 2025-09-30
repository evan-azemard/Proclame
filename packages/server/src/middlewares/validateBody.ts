import { logger } from "@/utils";
import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export function validateBody(schema: ZodSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      logger.warn(
        { errors: result.error.errors },
        "Validation du corps de la requête a échoué"
      );
      return res.status(400).json({
        message: "Erreur de validation du corps de la requête",
        errors: result.error.errors,
      });
    }
    req.body = result.data;
    next();
  };
}
