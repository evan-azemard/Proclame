import { Router } from "express";
import { categoryController } from "@/controllers";
import {
  validateBody,
  validateParams,
  isAuthenticated,
  isAdmin,
  csrfProtection,
} from "@/middlewares";
import {
  categoryCreateValidation,
  categoryUpdateValidation,
} from "@/validations";
import { idParamSchema } from "@/validations";

const router = Router();
router.get("/", isAuthenticated, categoryController.getAll);
router.get(
  "/:id",
  isAuthenticated,
  validateParams(idParamSchema),
  categoryController.getById
);
router.post(
  "/",
  isAdmin,
  csrfProtection,
  validateBody(categoryCreateValidation),
  categoryController.create
);
router.patch(
  "/:id",
  isAdmin,
  csrfProtection,
  validateParams(idParamSchema),
  validateBody(categoryUpdateValidation),
  categoryController.update
);
router.delete(
  "/:id",
  isAdmin,
  csrfProtection,
  validateParams(idParamSchema),
  categoryController.remove
);
export default router;
