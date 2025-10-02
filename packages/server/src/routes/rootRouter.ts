import { Router } from "express";
import {
  authRoutes,
  categoryRoutes,
  favoriteRoutes,
  proclamationRoutes,
  roleRoutes,
  soundRoutes,
  statusRoutes,
  userRoutes,
} from "./";
import { csrfProtection } from "@/middlewares";

const rootRouter = Router();
rootRouter.use("/auth", authRoutes);
rootRouter.use("/categories", categoryRoutes);
rootRouter.use("/favorites", favoriteRoutes);
rootRouter.use("/proclamations", proclamationRoutes);
rootRouter.use("/roles", roleRoutes);
rootRouter.use("/sounds", soundRoutes);
rootRouter.use("/statuses", statusRoutes);
rootRouter.use("/users", userRoutes);

rootRouter.get("/csrf-token", csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});
export default rootRouter;
