import { AppDataSource } from "../../data-source"
import { Task } from "../../entities/task.entity"

const taskUpdateService = async (id: string, description: string, completed: boolean = false): Promise<Task> => {

    const taskRepository = AppDataSource.getRepository(Task)

    const task = await taskRepository.findOneBy({id: id})

    if(!task){
        throw new Error("Task not found")
    }

    if(description !== undefined) {
        const arrayDescription = description.split(' ')
        const validatedDescription = arrayDescription.join('')

        if(description === '' || validatedDescription.length === 0) {
            throw new Error('Task cannot be blank')
        }
    }

    await taskRepository.update(task.id, {
        description: description,
        completed: completed
    })

    return task
}

export default taskUpdateService