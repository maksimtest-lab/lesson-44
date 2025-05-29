import { useState } from 'react';

interface UseStorageProps {
    key: string;
    initialValue?: any;
    type?: 'local' | 'session';
}

export default function useStorage({ key, initialValue, type = 'local' }: UseStorageProps) {
    const storage = type === 'session' ? sessionStorage : localStorage;

    const getStorageValue = () => {
        try {
            const item = storage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error reading value from ${type}Storage:`, error);

            return initialValue;
        }
    };

    const [value, setValue] = useState(getStorageValue);

    const setStorageValue = (newValue: any) => {
        try {
            setValue(newValue);
            storage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.error(`Error writing value to ${type}Storage:`, error);
        }
    };

    return [value, setStorageValue];
}