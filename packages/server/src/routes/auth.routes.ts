import { authController } from "@/controllers";
import { Router } from "express";
import { validateBody, isAuthenticated, authLimiter } from "@/middlewares";
import { authLoginValidation, authRegisterValidation } from "@/validations";

const router = Router();
router.get("/me", isAuthenticated, authController.me);
router.post(
  "/register",
  authLimiter,
  validateBody(authRegisterValidation),
  authController.register
);
router.post(
  "/login",
  authLimiter,
  validateBody(authLoginValidation),
  authController.login
);
router.post("/logout", isAuthenticated, authController.logout);
export default router;
