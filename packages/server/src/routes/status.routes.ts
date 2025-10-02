import { Router } from "express";
import { statusController } from "@/controllers";
import {
  validateBody,
  validateParams,
  isAdmin,
  csrfProtection,
} from "@/middlewares";
import {
  statusCreateValidation,
  statusUpdateValidation,
  idParamSchema,
} from "@/validations";

const router = Router();
router.get("/", statusController.getAllStatuses);
router.post(
  "/",
  isAdmin,
  csrfProtection,
  validateBody(statusCreateValidation),
  statusController.createStatus
);
router.patch(
  "/:id",
  isAdmin,
  csrfProtection,
  validateParams(idParamSchema),
  validateBody(statusUpdateValidation),
  statusController.updateStatus
);
router.delete(
  "/:id",
  isAdmin,
  csrfProtection,
  validateParams(idParamSchema),
  statusController.removeStatus
);
export default router;
