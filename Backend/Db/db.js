const Pool = require ("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host:"localhost",
    username: "oishi",
    database:"usermenagment",
    password: '1',
    port: 5432,
});
module.exports= pool;