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
  local: {
    client: "mysql",
    connection: {
      port: 3306,
      host: "localhost",
      database: "test",
      user: "root",
      password: "",
    },
    useNullAsDefault: false,
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
      //port: process.env.DATABASE_PORT || 3306,
      host: process.env.DATABASE_HOST || "localhost",
      database: process.env.DATABASE_NAME || "test",
      user: process.env.DATABASE_USER || "root",
      password: process.env.DATABASE_ACCESS_KEY || "",
    },
    useNullAsDefault: false,
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
