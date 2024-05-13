import React, { ReactNode } from 'react';

export const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='w-full h-screen flex justify-center items-center'>
            {children}
        </main>
    );
};
