// Permet de configurer et d'exporter un logger Pino pour l'application
import pino from "pino";
import { env } from "@/config";

export const logger = pino({
  level: env.NODE_ENV === "dev" ? "debug" : "error",
  formatters: {
    level(label) {
      return { level: label };
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  transport:
    env.NODE_ENV === "dev"
      ? { target: "pino-pretty", options: { colorize: true } }
      : undefined,
});
