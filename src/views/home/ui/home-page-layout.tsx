import React from 'react';
import { Header } from '@/widgets/header';
import { Providers } from '@/features/providers';
import { Toaster } from '@/shared/ui/sonner';
import { HomePageProps } from '../model';


export const HomePageLayout: React.FC<HomePageProps> = ({ children }) => {
    return (
        <Providers>
            <main>
                <Toaster />
                <Header/>
                <div className="container mx-auto">
                    { children }
                </div>
            </main>
        </Providers>
    );
};
