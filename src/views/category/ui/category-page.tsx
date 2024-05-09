"use client"

import { PlusIcon } from 'lucide-react';
import React, { FC, useMemo } from 'react';
import { AddCostModal } from '@/features/expense-modal';
import { useCategoryStore } from '@/entities/category';
import { currencies } from '@/entities/expense';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { Label } from '@/shared/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';
import { ICategoryParams } from '../model';

export const CategoryPage: FC<ICategoryParams> = ({ params }) => {
    const { currentCategory, getCategory } = useCategoryStore();

    useMemo(() => {
        getCategory(params.id)
    }, [])

    return (
        <div className="flex flex-col gap-4 mt-20">
            <Card className="p-4 flex gap-4 justify-between items-center">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {currentCategory?.name}
                </h1>

                <AddCostModal />
            </Card>
            <Card className="p-4 grid grid-cols-3">
                <div className="grid-col-span-1 grid grid-cols-2 gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight">
                        Сумма доходов: 
                    </h3>
                    <h3 className="text-2xl font-semibold tracking-tight">
                        {currentCategory?.calc.incomes || 0}
                    </h3>
                    <h3 className="text-2xl font-semibold tracking-tight">
                        Сумма расходов: 
                    </h3>
                    <h3 className="text-2xl font-semibold tracking-tight">
                        {currentCategory?.calc.expenses || 0}
                    </h3>
                    <h3 className="text-2xl font-semibold tracking-tight">
                        Разница: 
                    </h3>
                    <h3 className="text-2xl font-semibold tracking-tight">
                        {currentCategory?.calc.difference || 0}
                    </h3>
                </div>
                <div className="col-span-2 flex justify-end">
                    <div className="flex flex-col gap-2">
                        <Label>
                            Валюта
                        </Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Выберите валюту" />
                            </SelectTrigger>
                            <SelectContent>
                                {currencies.map(currency => 
                                    <SelectItem value={currency.ticker} key={currency.ticker}>
                                        {currency.name}
                                    </SelectItem>
                                )}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </Card>
        </div>
    );
};
