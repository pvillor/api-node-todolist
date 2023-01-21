import { Request, Response } from "express";
import taskCreateService from "../../services/tasks/taskCreate.service";

const taskCreateController = async (req: Request, res: Response) => {
    try {
        const { description } = req.body

        const newTask = await taskCreateService({ description })

        return res.status(201).send(newTask)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).send({
                error: err.name,
                message: err.message,
            })
        }
    }
}

export default taskCreateController