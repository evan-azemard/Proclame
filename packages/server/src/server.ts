import "dotenv/config";
import app from "./app";
import { env } from "@/config/";
import { logger } from "./utils";

const PORT = Number(env.PORT);

app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
  console.log(`[server] Listening on http://localhost:${PORT}`);
});
