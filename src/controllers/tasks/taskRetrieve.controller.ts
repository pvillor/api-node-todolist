import { Request, Response } from 'express'
import taskRetrieveService from '../../services/tasks/taskRetrieve.service'

const taskRetrieveController = async (req: Request, res: Response) => {

    try {

        const id = req.params.id
        const user = await taskRetrieveService(id)

        return res.json(user)

    } catch (err) {

        if (err instanceof Error) {
            return res.status(404).send({
                error: err.name,
                message: err.message,
            })
        }
    }
}

export default taskRetrieveController