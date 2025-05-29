import React from 'react';

interface GreetingProps{
    name: string;
    age: number;
    email?: string;
    onClick?: VoidFunction;
    children?: React.ReactNode;
}

export default function Greeting({ name, age, email, onClick, children }: GreetingProps) {
    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>Age: {age}</p>
            {email && <p>Email: {email}</p>}
            <button onClick={onClick}>Click me</button>
            {children}
        </div>
    )
}
// export const Greeting = ({ name, age, email }: GreetingProps) => {