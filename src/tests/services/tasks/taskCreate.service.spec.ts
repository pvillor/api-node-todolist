import taskCreateService from "../../../services/tasks/taskCreate.service"
import { DataSource } from "typeorm"
import { AppDataSource } from "../../../data-source"

describe('Create a task', () => {
    let connection: DataSource

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then(res => connection = res)
            .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => {
        await connection.destroy()
    })

    test('Should insert the information of new user in the database', async () => {
        const description = 'description'

        const taskData = { description }

        const newTask = await taskCreateService(taskData)

        expect(newTask.description).toEqual('description')
        expect(newTask.completed).toEqual(false)
    })
})