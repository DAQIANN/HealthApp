# Server Placeholder for PostgreSQL Integration

This folder contains placeholder guidance for connecting the frontend to a PostgreSQL-backed service.

## Goals

- Store historical healthcare data in PostgreSQL
- Provide APIs for plan comparison, historical trends, and service lookup
- Keep the frontend free of user login or tracking requirements

## Suggested next steps

1. Add a `pg` dependency and create a database schema for plans, services, and treatment history.
2. Use environment variables such as `DATABASE_URL` for connection configuration.
3. Build API endpoints like:
   - `/api/services`
   - `/api/comparison`
   - `/api/search?query=...`
   - `/api/historical`

## Example database entities

- `plans`
- `services`
- `conditions`
- `treatments`
- `historical_metrics`

## Environment example

Create a `.env` file with a connection string for PostgreSQL, for example:

```env
DATABASE_URL=postgres://user:password@localhost:5432/healthcare
```
