import { Router } from "express";
import { roleController } from "@/controllers";
import { validateBody, validateParams, isAdmin, csrfProtection } from "@/middlewares";
import {
  roleCreateValidation,
  roleUpdateValidation,
  idParamSchema,
} from "@/validations";

const router = Router();
router.get("/", isAdmin, roleController.getAll);
router.post(
  "/",
  isAdmin,
  csrfProtection,
  validateBody(roleCreateValidation),
  roleController.create
);
router.patch(
  "/:roleId",
  isAdmin,
  csrfProtection,
  validateParams(idParamSchema),
  validateBody(roleUpdateValidation),
  roleController.update
);
router.delete(
  "/:roleId",
  isAdmin,
  csrfProtection,
  validateParams(idParamSchema),
  roleController.remove
);
export default router;
