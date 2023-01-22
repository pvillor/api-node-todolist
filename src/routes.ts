import { Router } from "express";
import taskCreateController from "./controllers/tasks/taskCreate.controller";
import taskListController from "./controllers/tasks/taskList.controller";
import taskRetrieveController from "./controllers/tasks/taskRetrieve.controller";
import taskUpdateController from "./controllers/tasks/taskUpdate.controller";

const routes = Router()

routes.post('/tasks', taskCreateController)
routes.get('/tasks', taskListController)
routes.get('/tasks/:id', taskRetrieveController)
routes.patch('/tasks/:id', taskUpdateController)

export default routes