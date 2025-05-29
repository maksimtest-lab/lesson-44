import {useCallback, useMemo, useState} from "react";
import type {Task} from "../types";
import {TaskForm} from "./components/taskForm.tsx";
import {TaskColumn} from "./components/taskColumn.tsx";

export const Tasks = () => {
    const [tasks, setTasks] = useState<Array<Task>>([]);

    const addTask = useCallback((title: string) => {
        const newTask: Task = {
            id: Date.now(),
            title,
            completed: false,
        };

        setTasks((prevState) => [...prevState, newTask]);
    }, []);

    const toggleTask = useCallback((id: number) => {
        setTasks((prevState) => {
            return prevState.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
        })
    }, []);

    const deleteTask = useCallback((id: number) => {
        setTasks((prevState) => prevState.filter((task) => task.id !== id))
    }, []);

    const updateTask = useCallback((id: number,  title: string) => {
        setTasks((prevState) => {
            return prevState.map(task => task.id === id ? { ...task, title } : task);
        })
    }, []);

    const activeTasks = useMemo<Array<Task>>(() => tasks.filter((task) => !task.completed), [tasks]);
    const completedTasks = useMemo<Array<Task>>(() => tasks.filter((task) => task.completed), [tasks]);

    return (
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: 20 }}>
            <h1>Tasks</h1>
            <TaskForm addTask={addTask} />
            <div style={{ display: 'flex', gap: 20 }}>
                <TaskColumn
                    title="Активные"
                    tasks={activeTasks}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                />
                <TaskColumn
                    title="Завершенные"
                    tasks={completedTasks}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                />
            </div>
        </div>
    )
}
