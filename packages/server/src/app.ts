import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "config/env";
import helmet from "helmet";
import compression from "compression";
import { rootRouter } from "@/routes/";
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
app.use("/api", rootRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (_req, res) => {
  res.json({ status: "ok", env: env.NODE_ENV });
});

export default app;
