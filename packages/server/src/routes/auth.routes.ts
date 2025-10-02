import { authController } from "@/controllers";
import { Router } from "express";
import { validateBody, isAuthenticated, authLimiter, csrfProtection } from "@/middlewares";
import { authLoginValidation, authRegisterValidation } from "@/validations";

const router = Router();
router.get("/me", isAuthenticated, authController.me);
router.post(
  "/register",
  authLimiter,
  csrfProtection,
  validateBody(authRegisterValidation),
  authController.register
);
router.post(
  "/login",
  authLimiter,
  csrfProtection,
  validateBody(authLoginValidation),
  authController.login
);
router.post("/logout", isAuthenticated, csrfProtection, authController.logout);
export default router;
