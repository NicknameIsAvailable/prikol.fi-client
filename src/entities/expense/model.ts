import { ICategory } from "../category";

export interface IExpense { 
    id: string;
    createdAt: string;
    updatedAt: string;
    amount: number;
    description: string;
    isExpense: boolean;
    date: string;
    userId: string
    categoryId: string;
    category: ICategory;
}

export interface IExpenseState {
    expenses?: IExpense[];
    currentExpense?: IExpense;
}

export interface ICreateExpenseData {
    amount: number;
    description: string;
    date: string | Date;
    isExpense?: boolean;
}

export interface IExpenseActions {
    createExpense: (categoryId: string, data: ICreateExpenseData) => any;
    updateExpense: (id: string, data: ICreateExpenseData) => any;
    clearExpenses: () => any;
    deleteExpense: (id: string) => any;
    getExpenses: () => any;
    getByCategory: (id: string) => any;
    getExpense: (id: string) => any;
}

export type TExpenseStore = IExpenseState & IExpenseActions;

