import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface ICategory {
    id: string;
    name: string;
    description: string;
    iconName: keyof typeof dynamicIconImports;
    color: string;
    userId: string;
    calc: {
        incomes: number | null;
        expenses: number | null;
        difference: number | null;
    };
}

export interface ICategoryCreateData {
    name: string;
    description: string;
    iconName: string;
    color: string;
}

export type TCategoryState = {
    categories: ICategory[];
    currentCategory?: ICategory;
}

export type ICategoryActions = {
    getCategories: () => any;
    getCategory: (id: string) => any;
    clearCurrentCategory: () => any;
    createCategory: (data: ICategory) => any;
    updateCategory: (id: string, data: ICategory) => any;
}

export type TCategoryStore = TCategoryState & ICategoryActions;
