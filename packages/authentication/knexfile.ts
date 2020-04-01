// Update with your config settings.

const pg = require("pg");

const connectionUrl =
  process.env.DATABASE_URL || "postgres://postgres:@localhost:5432/postgres";

module.exports = {
  client: "pg",
  connection: connectionUrl,
  migrations: {
    directory: __dirname + "/db/migrations"
  }
};
