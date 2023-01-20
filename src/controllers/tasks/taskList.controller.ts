import { Request, Response } from "express";
import taskListService from "../../services/tasks/taskList.service";

const taskListController = (req: Request, res: Response) => {
    try {
        const tasks = taskListService()

        return res.send(tasks)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).send({
                error: err.name,
                message: err.message,
            })
        }
    }
}

export default taskListController