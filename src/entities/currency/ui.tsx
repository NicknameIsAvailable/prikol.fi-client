"use client"

import { createContext, FC, ReactNode } from "react";
import { useCurrencyStore } from "./lib";
import { ICurrencyState } from "./model";

const CurrencyContext = createContext<ICurrencyState | undefined>(undefined);

export const CurrencyProvider: FC<{ children: ReactNode }> = ({
    children
}) => {
    const currencyStore = useCurrencyStore();

    return (
        <CurrencyContext.Provider value={currencyStore}>
            {children}
        </CurrencyContext.Provider>
    );
}