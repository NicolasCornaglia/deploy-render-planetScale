/* // conection to database in railway, didnt work
const { createPool } = require("mysql2/promise");
const {DB_NAME, DB_HOST, DB_PASSWORD, DB_USER, DB_PORT, DB_DIALECT} = require('./configDB');

const pool = createPool({
   user: DB_USER,
   password: DB_PASSWORD,
   host: DB_HOST,
   port: DB_PORT,
   database: DB_NAME,

   dialect: DB_DIALECT,
   allowPublicKeyRetrieval: true
})


module.exports = { pool }; */