import {type FC, useState} from "react";
import * as React from "react";

interface TaskFormProps {
    addTask: (title: string) => void;
}

export const TaskForm: FC<TaskFormProps> = React.memo(({ addTask }) => {
    const [title, setTitle] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (title.trim()) {
            addTask(title);
            setTitle('')
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
            <input
                type="text"
                value={title}
                onChange={handleChange}
                placeholder="Новая задача"
                style={{ padding: 8, width: '80%' }}
            />
            <button type="submit" style={{ padding: 8, marginLeft: 8 }}>Добавить</button>
        </form>
    )
});
