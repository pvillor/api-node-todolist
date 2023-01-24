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

    const arrayDescription = description.split(' ')
        const validatedDescription = arrayDescription.join('')

        if(description === '' || validatedDescription.length === 0) {
            throw new Error('Task cannot be blank')
        }

    const task = new Task()
    task.description = description
    task.completed = false

    taskRepository.create(task)
    await taskRepository.save(task)

    return task
}

export default taskCreateService