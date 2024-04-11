const promise = require('bluebird');
 
const options = {
  promiseLib: promise,
};
 
const pgp = require('pg-promise')(options);
 
const config = require("./config/postgres.json");
 
// const postgres = config.get("postgres");
 
const conn = {
  host:     config.postgres.host,
  database: config.postgres.database,
  user:     config.postgres.user,
  password: config.postgres.password,
  port: config.postgres.port,
  ssl:      config.postgres.ssl,
  };
 
const db = pgp(conn);
 
module.exports = db;