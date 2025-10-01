import { Router } from "express";
import { categoryController } from "@/controllers";
import {
  validateBody,
  validateParams,
  isAuthenticated,
  isAdmin,
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
  validateBody(categoryCreateValidation),
  categoryController.create
);
router.patch(
  "/:id",
  isAdmin,
  validateParams(idParamSchema),
  validateBody(categoryUpdateValidation),
  categoryController.update
);
router.delete(
  "/:id",
  isAdmin,
  validateParams(idParamSchema),
  categoryController.remove
);
export default router;
