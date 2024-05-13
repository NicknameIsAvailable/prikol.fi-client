"use client"

import React, { FC, useEffect } from 'react';
import { ExpenseTable } from '@/widgets/expense-table';
import { AddCostModal } from '@/features/expense-modal';
import { useCategoryStore } from '@/entities/category';
import { useExpenseStore } from '@/entities/expense';
import { Card } from '@/shared/ui/card';
import { ICategoryParams } from '../model';
import { useCurrencyStore } from '@/entities/currency';

export const CategoryPage: FC<ICategoryParams> = ({ params }) => {
    const { currentCategory, getCategory, clearCurrentCategory } = useCategoryStore();
    const { clearExpenses } = useExpenseStore()
    const { currentCurrency } = useCurrencyStore()

    useEffect(() => {
        getCategory(params.id);
        return () => {
            clearCurrentCategory();
            clearExpenses();
        }
    }, [])

    return (
        <div className="flex flex-col gap-4 mt-20">
            <Card style={{ borderColor: currentCategory?.color, backgroundColor: `${currentCategory?.color}30` }} className="p-4 flex gap-4 justify-between items-center">
                <div className="flex-1 flex flex-col gap-4">
                    <h1 style={{
                            color: currentCategory?.color
                        }}
                        className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        {currentCategory?.name}
                    </h1>
                    <p 
                        style={{
                            color: currentCategory?.color
                        }}>
                        {currentCategory?.description}
                    </p>
                </div>
                <div className="flex-1 flex justify-end">
                    <AddCostModal />
                </div>
            </Card>
            <Card className="p-4 grid grid-cols-3">
                <div className="grid-col-span-1 grid grid-cols-2 gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight">
                        Сумма доходов: 
                    </h3>
                    <h3 className="text-2xl font-semibold tracking-tight">
                        {currentCategory?.calc.incomes || 0}{currentCurrency.symbol}
                    </h3>
                    <h3 className="text-2xl font-semibold tracking-tight">
                        Сумма расходов: 
                    </h3>
                    <h3 className="text-2xl font-semibold tracking-tight">
                        {currentCategory?.calc.expenses || 0}{currentCurrency.symbol}
                    </h3>
                    <h3 className="text-2xl font-semibold tracking-tight">
                        Разница: 
                    </h3>
                    <h3 className="text-2xl font-semibold tracking-tight">
                        {currentCategory?.calc.difference || 0}{currentCurrency.symbol}
                    </h3>
                </div>
            </Card>
            <ExpenseTable categoryId={currentCategory?.id}/>
        </div>
    );
};
