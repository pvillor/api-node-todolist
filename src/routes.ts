import { Router } from "express";
import taskCreateController from "./controllers/tasks/taskCreate.controller";
import taskListController from "./controllers/tasks/taskList.controller";

const routes = Router()

routes.post('/tasks', taskCreateController)
routes.get('/tasks', taskListController)

export default routes