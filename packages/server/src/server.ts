import 'dotenv/config';
import app from './app';
import { env } from 'config/env';

const PORT = Number(env.PORT);

app.listen(PORT, () => {
    console.log(`[server] Listening on http://localhost:${PORT}`);
});