// Définit la configuration de Drizzle Kit (CLI) pour PostgreSQL
import { defineConfig } from "drizzle-kit";
import { env } from "./env";

export default defineConfig({
  dialect: "postgresql",
  schema: "packages/server/src/schemas/**/*.schema.ts",
  out: "packages/server/src/migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
