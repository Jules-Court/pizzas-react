const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "password",
    database: "pizzas",
    host: "localhost",
    port: 5432 //Port de base de pg
});

module.exports = pool;