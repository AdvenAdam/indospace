'use client';

import { createContext, useState, Dispatch, SetStateAction } from 'react';

interface TodoContextProps {
    currency: string;
    setCurrency: Dispatch<SetStateAction<string>>;
}

export const TodoContext = createContext<TodoContextProps>({
    currency: 'USD',
    setCurrency: () => {} // Placeholder function
});

export const TodoContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currency, setCurrency] = useState('USD');

    return <TodoContext.Provider value={{ currency, setCurrency }}>{children}</TodoContext.Provider>;
};
