/**
 * PostgreSQL integration placeholder.
 *
 * When you're ready to connect the frontend to real historical data,
 * install `pg` and use a connection string from `.env`.
 *
 * Example:
 *   npm install pg
 *
 *   import { Client } from 'pg';
 *
 *   const client = new Client({ connectionString: process.env.DATABASE_URL });
 *   await client.connect();
 *   const result = await client.query('SELECT * FROM healthcare_services');
 *
 * Keep this file as a starting point for database-driven API routes.
 */

export type DatabaseConfig = {
  databaseUrl: string;
};

// TODO: remove the fallback default once DATABASE_URL is set in the deployment environment
export const dbConfig: DatabaseConfig = {
  databaseUrl: process.env.DATABASE_URL ?? 'postgres://user:password@localhost:5432/healthcare',
};
