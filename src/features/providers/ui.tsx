import React, { FC, ReactNode } from 'react';
import { AuthProvider } from '@/entities/auth';
import { CategoryProvider } from '@/entities/category';
import { CurrencyProvider } from '@/entities/currency';
import { ExpenseProvider } from '@/entities/expense';
import { ThemeProvider } from '../change-theme/ui';

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <AuthProvider>
            <CategoryProvider>
                <ExpenseProvider>
                    <CurrencyProvider>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                            disableTransitionOnChange
                        >
                            {children}
                        </ThemeProvider>
                    </CurrencyProvider>
                </ExpenseProvider>
            </CategoryProvider>
        </AuthProvider>
    );
};
