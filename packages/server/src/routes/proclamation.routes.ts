import { Router } from "express";
import { proclamationController } from "@/controllers";
import {
  validateBody,
  validateParams,
  isAuthenticated,
  isAdmin,
  csrfProtection,
} from "@/middlewares";
import {
  proclamationCreateValidation,
  proclamationUpdateValidation,
  idParamSchema,
} from "@/validations";

const router = Router();
router.get("/", isAuthenticated, proclamationController.getAll);
router.get(
  "/:id",
  isAuthenticated,
  validateParams(idParamSchema),
  proclamationController.getById
);
router.post(
  "/",
  isAdmin,
  csrfProtection,
  validateBody(proclamationCreateValidation),
  proclamationController.create
);
router.patch(
  "/:id",
  isAdmin,
  csrfProtection,
  validateParams(idParamSchema),
  validateBody(proclamationUpdateValidation),
  proclamationController.update
);
router.delete(
  "/:id",
  isAdmin,
  csrfProtection,
  validateParams(idParamSchema),
  proclamationController.remove
);
export default router;
