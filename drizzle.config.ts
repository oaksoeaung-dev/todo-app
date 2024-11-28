import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './server/migration',
    schema: './server/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DRIZZLE_DATABASE_URL!,
    },
});