import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { env } from 'config/env';

// Create and configure Express application (no server.listen here)
const app = express();

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (_req, res) => {
    res.json({ status: 'ok', env: env.NODE_ENV });
});

export default app;

