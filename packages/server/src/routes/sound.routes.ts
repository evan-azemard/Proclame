import { Router } from "express";
import { soundController } from "@/controllers";
import {
  validateBody,
  validateParams,
  isAuthenticated,
  isAdmin,
} from "@/middlewares";
import {
  soundCreateValidation,
  soundUpdateValidation,
  idParamSchema,
} from "@/validations";

const router = Router();
router.get("/", isAuthenticated, soundController.getAll);
router.post(
  "/",
  isAdmin,
  validateBody(soundCreateValidation),
  soundController.create
);
router.patch(
  "/:id",
  isAdmin,
  validateParams(idParamSchema),
  validateBody(soundUpdateValidation),
  soundController.update
);
router.delete(
  "/:id",
  isAdmin,
  validateParams(idParamSchema),
  soundController.remove
);
export default router;
