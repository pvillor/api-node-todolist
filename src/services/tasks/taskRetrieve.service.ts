import { AppDataSource } from "../../data-source"
import { Task } from "../../entities/task.entity"

const taskRetrieveService = async (id: string): Promise<Task> => {

    const taskRepository = AppDataSource.getRepository(Task)

    const task = await taskRepository.findOneBy({id: id})

    if(!task){
        throw new Error("Task not found")
    }

    return task
}

export default taskRetrieveService