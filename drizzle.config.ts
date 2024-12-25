import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: '.env' })

export default defineConfig({
  schema: './db/schema.ts',
  out: './supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    // host: 'pg-7ebcf15-mushfiqweb-blog.b.aivencloud.com',
    // port: 10698,
    // user: 'avnadmin',
    // password: 'AVNS_1GZL7B0ZwZtHYDTZU6Q',
    // database: 'defaultdb',
    // ssl: 'require',
  },
})
