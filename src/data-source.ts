import { DataSource } from "typeorm";
import { Task } from "./entities/task.entity";

require('dotenv').config()

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,

    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PWD,
    database: process.env.POSTGRES_DB,

    synchronize: false,
    logging: true,
    entities: [Task],
    migrations: ['src/migrations/*.ts']
})

AppDataSource.initialize().then(() => console.log('DataSource initialized')).catch((err) => console.error('Error during DataSource initialization', err))