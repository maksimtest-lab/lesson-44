import type {Task} from "../../types";
import  {type FC} from "react";
import {TasksList} from "./tasksList.tsx";
import * as React from "react";

interface TaskColumnProps {
    title: string;
    tasks: Array<Task>;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    updateTask: (id: number, title: string) => void;
}

export const TaskColumn: FC<TaskColumnProps> = React.memo(({ title, deleteTask, tasks, toggleTask, updateTask }) => {

    return (
        <div style={{ flex: 1 }}>
            <h2>{title}</h2>
            <TasksList
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                updateTask={updateTask}
            />
        </div>
    )
});
