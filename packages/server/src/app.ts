import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "config/env";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import { csrfProtection } from "./middlewares";
const app = express();
app.use(helmet());
app.use(compression());
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message:
    "Trop de requêtes ont été effectuées depuis cette adresse IP, veuillez réessayer plus tard.",
});

app.post("/login", authLimiter);
app.post("/register", authLimiter);
app.post("/update", authLimiter);

app.get("/api/csrf-token", csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (_req, res) => {
  res.json({ status: "ok", env: env.NODE_ENV });
});

export default app;
