import type {Task} from "../../types";
import {type FC, useEffect, useRef, useState} from "react";
import * as React from "react";

interface TaskItemProps {
    task: Task;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    updateTask: (id: number, title: string) => void;
}

export const TaskItem: FC<TaskItemProps> = React.memo(({ task, deleteTask, toggleTask, updateTask }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [tampTitle, setTampTitle] = useState<string>(task.title);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus();
        }
    }, [isEditing, inputRef])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTampTitle(event.target.value)
    }

    const handleChangeStatus = () => {
        toggleTask(task.id);
    }

    const toggleEditing = () => {
        setIsEditing(prevState => !prevState)
    }

    const handleSave = () => {
        updateTask(task.id, tampTitle);
        setTampTitle('');
        toggleEditing()
    }

    const handleDelete = () => {
        deleteTask(task.id)
    }

    return (
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleChangeStatus}
                style={{ marginRight: 8 }}
            />
            {isEditing ? (
                <>
                    <input
                        ref={inputRef}
                        value={tampTitle}
                        type="text"
                        onChange={handleInputChange}
                        style={{ flexGrow: 1, marginRight: 8 }}
                    />
                    <button onClick={handleSave}>Сохранить</button>
                </>
            ) : (
                <>
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none', flexGrow: 1 }}>
                        {task.title}
                    </span>
                    <button onClick={toggleEditing}>Редактировать</button>
                </>
            )}
            <button onClick={handleDelete}>Удалить</button>
        </li>
    )
});
