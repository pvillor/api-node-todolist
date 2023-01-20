import { tasks } from "../../database";
import { ITaskCreate, ITask } from "../../interfaces/tasks";
import { v4 as uuidv4 } from 'uuid'

const taskCreateService = ({ description }: ITaskCreate) => {
    const descriptionAlreadyExists = tasks.find(task => task.description === description)

    if(descriptionAlreadyExists) {
        throw new Error('Task already exists')
    }

    const newTask: ITask = {
        id: uuidv4(),
        description,
    }

    tasks.push(newTask)

    return newTask
}

export default taskCreateService