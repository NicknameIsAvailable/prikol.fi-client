import React, { ReactNode } from 'react';
import { AuthLayout } from '@/views/auth';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    );
};

export default Layout;