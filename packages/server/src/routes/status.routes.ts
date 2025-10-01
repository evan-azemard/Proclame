import { Router } from "express";
import { statusController } from "@/controllers";
import {
  validateBody,
  validateParams,
  isAdmin,
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
  validateBody(statusCreateValidation),
  statusController.createStatus
);
router.patch(
  "/:id",
  isAdmin,
  validateParams(idParamSchema),
  validateBody(statusUpdateValidation),
  statusController.updateStatus
);
router.delete(
  "/:id",
  isAdmin,
  validateParams(idParamSchema),
  statusController.removeStatus
);
export default router;
