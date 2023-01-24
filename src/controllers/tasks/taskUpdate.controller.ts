import { Request, Response } from 'express'
import taskUpdateService from '../../services/tasks/taskUpdate.service'

    const taskUpdateController = async (req: Request, res: Response) => {

        try {

            const { id } = req.params
            const { description, completed } = req.body

            const task = await taskUpdateService(id, description, completed)

            return res.status(200).json({task: task})

        } catch (err) {

            if (err instanceof Error) {
                return res.status(404).send({
                    error: err.name,
                    message: err.message,
                })
            }
        }
    }

    export default taskUpdateController