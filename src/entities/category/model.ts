import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface ICategory {
    id: string;
    name: string;
    description: string;
    iconName: keyof typeof dynamicIconImports;
    color: string;
    userId: string;
    isExpense: boolean;
    calc: {
        incomes: number | null;
        expenses: number | null;
        difference: number | null;
    };
}

export type TCategoryState = {
    categories: ICategory[];
    currentCategory?: ICategory;
}

export type ICategoryActions = {
    getCategories: () => void;
    getCategory: (id: string) => void;
    createCategory: (data: ICategory) => void;
    updateCategory: (id: string, data: ICategory) => void;
}

export type TCategoryStore = TCategoryState & ICategoryActions;
