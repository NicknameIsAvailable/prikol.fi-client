import React, { FC, ReactNode } from 'react';
import { AuthProvider } from '@/entities/auth';
import { CategoryProvider } from '@/entities/category';

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <AuthProvider>
            <CategoryProvider>
                {children}
            </CategoryProvider>
        </AuthProvider>
    );
};
