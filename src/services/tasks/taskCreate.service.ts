import { Task } from "../../entities/task.entity";
import { ITaskCreate } from "../../interfaces/tasks";
import { AppDataSource } from "../../data-source";

const taskCreateService = async ({ description }: ITaskCreate) => {
    const taskRepository = AppDataSource.getRepository(Task)
    const tasks = await taskRepository.find()

    const descriptionAlreadyExists = tasks.find(task => task.description === description)

    if(descriptionAlreadyExists) {
        throw new Error('Task already exists')
    }

    const task = new Task()
    task.description = description
    task.completed = false

    taskRepository.create(task)
    await taskRepository.save(task)

    return task
}

export default taskCreateService