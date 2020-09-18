require('ts-node/register');

export default {
  development: {
    client: "sqlite3",
    connection: {
      filename: `${__dirname}/src/database/database.db`,
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
    timezone: "UTC",
  },
  production: {
    client: "mysql",
    connection: {
      port: process.env.DATABASE_PORT,
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_ACCESS_KEY,
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
    timezone: "UTC",
  },
};