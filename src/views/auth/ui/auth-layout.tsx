import React, { FC } from 'react';
import { IAuthLayoutProps } from '../model';

export const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
    return (
        <main className='w-full h-screen flex justify-center items-center'>
            {children}
        </main>
    );
};
