export interface ITask {
    id: string;
    description: string;
    completed: boolean;
}

export interface ITaskCreate {
    description: string;
    completed: boolean;
}