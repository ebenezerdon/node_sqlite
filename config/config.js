require('dotenv').config();

module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./sqlite.db"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory"
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
};
