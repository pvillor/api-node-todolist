import taskListService from "../../../services/tasks/taskList.service"
import { DataSource } from "typeorm"
import { AppDataSource } from "../../../data-source"

describe('List all tasks', () => {
    let connection: DataSource

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then(res => connection = res)
            .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => {
        await connection.destroy()
    })

    test('Should list all tasks', async () => {
        const taskList = await taskListService()

        expect(taskList).toHaveProperty('map')
    })
})