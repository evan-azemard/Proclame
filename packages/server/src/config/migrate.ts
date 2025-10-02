// Permet d'appliquer les migrations de la base de données en utilisant Drizzle ORM et PostgreSQL.
import { Pool } from "pg";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres/driver";
import path from "node:path";
import { env } from "../config/env";
import { logger } from "../utils/logger";

export async function main() {
  const pool = new Pool({ connectionString: env.DATABASE_URL });
  const db: NodePgDatabase = drizzle(pool);

  logger.info("Starting migration...");

  const migrationsFolder = path.resolve(__dirname, "../migrations");
  await migrate(db, { migrationsFolder });
  logger.info("Migration completed successfully");

  await pool.end();
}

main();
