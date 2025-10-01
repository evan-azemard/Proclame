// Permet de configurer et d'exporter un logger Pino pour l'application
import pino from "pino";

const nodeEnv = process.env.NODE_ENV ?? "prod";
const isDev = nodeEnv === "dev";

export const logger = pino({
  level: isDev ? "debug" : "error",
  formatters: {
    level(label) {
      return { level: label };
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  transport: isDev
    ? { target: "pino-pretty", options: { colorize: true } }
    : undefined,
});
