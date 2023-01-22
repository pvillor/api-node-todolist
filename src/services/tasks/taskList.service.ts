import { Task } from "../../entities/task.entity";
import { AppDataSource } from "../../data-source";

const taskListService = async () => {
    const taskRepository = AppDataSource.getRepository(Task)

    const tasks = taskRepository.find()

    return tasks
}

export default taskListService