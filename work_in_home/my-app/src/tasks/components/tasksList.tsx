import type {Task} from "../../types";
import  {type FC} from "react";
import {TaskItem} from "./taskItem.tsx";
import * as React from "react";

interface TasksListProps {
    tasks: Array<Task>;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    updateTask: (id: number, title: string) => void;
}

export const TasksList: FC<TasksListProps> = React.memo(({ tasks, deleteTask, toggleTask, updateTask }) => {
    return !tasks.length ? (
        <p>Нет задач</p>
    ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                    updateTask={updateTask}
                />
            ))}
        </ul>
    )
});
