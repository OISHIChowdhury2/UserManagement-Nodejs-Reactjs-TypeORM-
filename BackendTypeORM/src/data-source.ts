import "reflect-metadata"
import { DataSource } from "typeorm"
import { Register } from "./entity/Register"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1",
    database: "usermenagment",
    synchronize: true,
    logging: false,
    entities: [Register],
    migrations: [],
    subscribers: [],
})
