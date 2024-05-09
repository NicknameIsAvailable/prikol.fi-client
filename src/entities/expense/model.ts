export enum ECurrency {
    USD = "United States Dollar",
    EUR = "Euro",
    JPY = "Japanese Yen",
    GBP = "British Pound Sterling",
    AUD = "Australian Dollar",
    CAD = "Canadian Dollar",
    CHF = "Swiss Franc",
    CNY = "Chinese Yuan",
    SEK = "Swedish Krona",
    NZD = "New Zealand Dollar",
    KRW = "South Korean Won",
    SGD = "Singapore Dollar",
    NOK = "Norwegian Krone",
    MXN = "Mexican Peso",
    INR = "Indian Rupee",
    RUB = "Russian Ruble",
    BRL = "Brazilian Real",
    ZAR = "South African Rand",
    HKD = "Hong Kong Dollar",
    TRY = "Turkish Lira",
}

export interface ICurrency {
    ticker: ECurrency,
    name: string,
    symbol: string,
}

export interface IExpense { 
    id: string;
    createdAt: string;
    updatedAt: string;
    currency: ECurrency;
    amount: number;
    description: string;
    isExpense: boolean;
    date: string;
    userId: string
    categoryId: string;
}

export interface IExpenseState {
    expenses?: IExpense[];
    currentExpense?: IExpense;
}

export interface ICreateExpenseData {
    amount: number;
    currency: ECurrency;
    description: string;
    isExpense: boolean;
}

export interface IExpenseActions {
    createExpense: (categoryId: string, data: ICreateExpenseData) => any;
    updateExpense: (id: string, data: ICreateExpenseData) => any;
    deleteExpense: (id: string) => any;
    getExpenses: () => any;
    getByCategory: (id: string) => any;
    getExpense: (id: string) => any;
}

export type TExpenseStore = IExpenseState & IExpenseActions;

