"use client"

import { createContext, FC, ReactNode } from "react";
import { useCategoryStore } from "./lib";
import { TCategoryState } from "./model";

const CategoryContext = createContext<TCategoryState | undefined>(undefined);

export const CategoryProvider: FC<{ children: ReactNode }> = ({
    children
}) => {
    const categoryStore = useCategoryStore();

    return (
        <CategoryContext.Provider value={categoryStore}>
            {children}
        </CategoryContext.Provider>
    );
}