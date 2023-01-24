import express from 'express'
import routes from './routes'
import cors from 'cors'
import "reflect-metadata"
import { AppDataSource } from './data-source'

const app = express()

app.use(express.json())

app.use(cors())

app.use(routes)

const init = async () => {
    await AppDataSource.initialize().catch(err => {
    console.error('Error during Data Source initialization', err)
    })

    app.listen(8000)
}

init()

export default app