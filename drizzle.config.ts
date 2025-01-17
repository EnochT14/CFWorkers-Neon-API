import { defineConfig } from "drizzle-kit"

export default defineConfig({
    dialect: "postgresql",
    schema: './src/db/schema.ts',
    out: './drizzle',
    dbCredentials: {
        url: "postgresql://yourapi:key@.aws.neon.tech/neondb?sslmode=require"
    }
})