// Permet de s'assurer que les variables d'environnement nécessaires sont définies
import { logger } from "./logger";

export const requireEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    logger.error(`Environment variable ${name} is required but not set.`);
    throw new Error(`Environment variable ${name} is required but not set.`);
  }
  return value;
};
