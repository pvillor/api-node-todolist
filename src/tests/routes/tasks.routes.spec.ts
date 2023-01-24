import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from 'supertest'
import app from "../../app";

describe('Testing the task routes', () => {
    let connection: DataSource

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then(res => connection = res)
            .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => {
        await connection.destroy()
    })

    test('Should be able to create a new task', async () => {
        const description = 'description'

        const taskData = { description }

        const response = await request(app).post('/tasks').send(taskData)

        expect(response.status).toBe(201)
        expect(response.body).toEqual(
            expect.objectContaining({
                description,
                completed: false
            })
        )
    })

    test('Should be able to return a list of all tasks', async () => {
        const response = await request(app).get('/tasks')

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('map')
    })
})
