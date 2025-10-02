import { Router } from "express";
import { favoriteController } from "@/controllers";
import { validateBody, validateParams, isAuthenticated, csrfProtection } from "@/middlewares";
import { favoriteCreateValidation, idParamSchema } from "@/validations";

const router = Router();
router.get("/", isAuthenticated, favoriteController.getAll);
router.post(
  "/",
  isAuthenticated,
  csrfProtection,
  validateBody(favoriteCreateValidation),
  favoriteController.create
);
router.delete(
  "/:id",
  isAuthenticated,
  csrfProtection,
  validateParams(idParamSchema),
  favoriteController.remove
);
export default router;
