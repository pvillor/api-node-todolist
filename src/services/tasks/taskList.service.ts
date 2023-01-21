import { Task } from "../../entities/task.entity";
import { AppDataSorce } from "../../data-source";

const taskListService = async () => {
    const taskRepository = AppDataSorce.getRepository(Task)

    const tasks = taskRepository.find()

    return tasks
}

export default taskListService