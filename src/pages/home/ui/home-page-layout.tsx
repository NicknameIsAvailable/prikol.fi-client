import React from 'react';
import { Header } from '@/widgets/header';
import { HomePageProps } from '../model';


export const HomePageLayout: React.FC<HomePageProps> = ({ children }) => {
    return (
        <main>
            <Header/>
            <div className="container mx-auto">
                { children }
            </div>
        </main>
    );
};
