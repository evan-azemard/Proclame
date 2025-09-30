// Permet d'appliquer les migrations de la base de données en utilisant Drizzle ORM et PostgreSQL.
import { Pool } from "pg";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres/driver";
import { env } from "@/config";
import { logger } from "@/utils";

export async function main() {
  const pool = new Pool({ connectionString: env.DATABASE_URL });
  const db: NodePgDatabase = drizzle(pool);

  logger.info("Starting migration...");

  await migrate(db, { migrationsFolder: "src/migrations" });
  logger.info("Migration completed successfully");

  await pool.end();
}

main();
