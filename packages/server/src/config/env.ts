// Permet la centralisation et la validation des variables d'environnement
import { requireEnv } from "../utils";
import { EnvConfig } from "../types";
import path from "node:path";
import fs from "node:fs";
import dotenv from "dotenv";

const serverEnvPath = path.resolve(__dirname, "../../.env");
if (fs.existsSync(serverEnvPath)) {
  dotenv.config({ path: serverEnvPath });
}



export const env: EnvConfig = {
  PORT: Number(requireEnv("PORT")),
  NODE_ENV: requireEnv("NODE_ENV") as "dev" | "prod" | "test",
  ORIGIN: requireEnv("ORIGIN"),
  DATABASE_URL: requireEnv("DATABASE_URL"),
  JWT_SECRET: requireEnv("JWT_SECRET"),
};
