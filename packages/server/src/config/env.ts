// Permet la centralisation et la validation des variables d'environnement
import { requireEnv } from "@/utils";
import { EnvConfig } from "@/types";
import "dotenv/config";

export const env: EnvConfig = {
  PORT: parseInt(requireEnv("PORT")),
  NODE_ENV: requireEnv("NODE_ENV") as "dev" | "prod" | "test",
  ORIGIN: requireEnv("ORIGIN"),
  DATABASE_URL: requireEnv("DATABASE_URL"),
  JWT_SECRET: requireEnv("JWT_SECRET"),
};
