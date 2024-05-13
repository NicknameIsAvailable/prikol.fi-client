import React from 'react';
import { CategoryList } from '@/widgets/category-list';
import { Card } from '@/shared/ui/card';
import { ExpenseTable } from '@/widgets/expense-table';

export const HomePage = () => {
    return (
        <div className="mt-20 flex flex-col gap-4">
            <Card className="p-4">

            </Card>
            <CategoryList />
            <ExpenseTable />
        </div>
    );
};
