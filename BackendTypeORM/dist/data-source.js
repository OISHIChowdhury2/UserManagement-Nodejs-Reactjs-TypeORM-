"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Register_1 = require("./entity/Register");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1",
    database: "usermenagment",
    synchronize: true,
    logging: false,
    entities: [Register_1.Register],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map