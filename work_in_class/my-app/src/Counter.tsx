import { useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

export default function Counter() {
    const [count, setCount] = useState<number>(0);
    // const [users, setUsers] = useState<Array<User>>([]);
    // const [user, setUser] = useState<User>(null);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
