import { EnvConfig } from '../types/env';
import 'dotenv/config';

export const env: EnvConfig = {
    PORT: parseInt(process.env.PORT || '3000'),
    NODE_ENV: process.env.NODE_ENV as 'dev' | 'prod' | 'test',
    ORIGIN: process.env.ORIGIN || 'http://localhost:3000',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/mydb',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
}   