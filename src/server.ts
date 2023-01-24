import app from "./app";
import { AppDataSource } from "./data-source";

const init = async () => {
    await AppDataSource.initialize().catch(err => {
        console.error('Error during Data Source initialization', err)
    })
    app.listen(8000)
}

init()