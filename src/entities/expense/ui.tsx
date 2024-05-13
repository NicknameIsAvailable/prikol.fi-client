"use client"

import { createContext, FC, ReactNode } from "react";
import { useExpenseStore } from "./api";
import { IExpenseState } from "./model";

const ExpenseContext = createContext<IExpenseState | undefined>(undefined);

export const ExpenseProvider: FC<{ children: ReactNode }> = ({
    children
}) => {
    const expenseStore = useExpenseStore();

    return (
        <ExpenseContext.Provider value={expenseStore}>
            {children}
        </ExpenseContext.Provider>
    );
}