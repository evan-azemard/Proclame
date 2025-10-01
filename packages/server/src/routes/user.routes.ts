import { Router } from "express";
import { userController } from "@/controllers";
import {
  validateBody,
  validateParams,
  isAdmin,
  authLimiter,
} from "@/middlewares";
import { userUpdateSchema, idParamSchema } from "@/validations";

const router = Router();
router.get("/", isAdmin, userController.getAllUsers);
router.get("/:id", validateParams(idParamSchema), userController.getUserById);
router.patch(
  "/:id",
  authLimiter,
  validateParams(idParamSchema),
  validateBody(userUpdateSchema),
  userController.updateUser
);
router.delete(
  "/:id",
  isAdmin,
  validateParams(idParamSchema),
  userController.removeUser
);
export default router;
