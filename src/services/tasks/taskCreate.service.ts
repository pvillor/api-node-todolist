import { Task } from "../../entities/task.entity";
import { ITaskCreate, ITask } from "../../interfaces/tasks";
import { v4 as uuidv4 } from 'uuid'
import { AppDataSorce } from "../../data-source";

const taskCreateService = async ({ description }: ITaskCreate) => {
    const taskRepository = AppDataSorce.getRepository(Task)
    const tasks = await taskRepository.find()

    const descriptionAlreadyExists = tasks.find(task => task.description === description)

    if(descriptionAlreadyExists) {
        throw new Error('Task already exists')
    }

    const task = new Task()
    task.description = description

    taskRepository.create(task)
    await taskRepository.save(task)

    return task
}

export default taskCreateService