import { AppDataSource } from "../../data-source"
import { Task } from "../../entities/task.entity"

const taskUpdateService = async (id: string, description: string, completed: boolean = false): Promise<void> => {

    const taskRepository = AppDataSource.getRepository(Task)

    const task = await taskRepository.findOneBy({id: id})

    if(!task){
        throw new Error("Task not found")
    }

    if(description) {
        if(description.startsWith(' ') || description === ''){
            throw new Error("Task cannot be blank")
        }
    }

    await taskRepository.update(task!.id, {
        description: description,
        completed: completed
    })
}

export default taskUpdateService