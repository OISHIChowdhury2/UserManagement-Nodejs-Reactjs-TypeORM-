import Pool from "pg";

const pool =new Pool({
    user: "postgres",
    host:"localhost",
    database:"usermenagment",
    password: '1',
    port: 5432,
})
export default { pool };