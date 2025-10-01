import { Router } from "express";
import { roleController } from "@/controllers";
import { validateBody, validateParams, isAdmin } from "@/middlewares";
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
  validateBody(roleCreateValidation),
  roleController.create
);
router.patch(
  "/:roleId",
  isAdmin,
  validateParams(idParamSchema),
  validateBody(roleUpdateValidation),
  roleController.update
);
router.delete(
  "/:roleId",
  isAdmin,
  validateParams(idParamSchema),
  roleController.remove
);
export default router;
