"use client"

import React from 'react';
import { ECurrency, ICurrency, useCurrencyStore } from '@/entities/currency';
import { Label } from '@/shared/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';

export const SelectCurrency = () => {
    const { currencies, currentCurrency, selectCurrency } = useCurrencyStore()

    const handleChange = (event: ECurrency) => {
        selectCurrency(event)
    }

    return (
        <div className="flex flex-col gap-2">
            <Label>
                Валюта
            </Label>
            <Select onValueChange={handleChange}>
                <SelectTrigger>
                    <SelectValue defaultValue={currentCurrency.name} placeholder="Выберите валюту" />
                </SelectTrigger>
                <SelectContent>
                    {currencies.map((currency: ICurrency) => 
                        <SelectItem value={currency.ticker} key={currency.ticker}>
                            {currency.name}
                        </SelectItem>
                    )}
                </SelectContent>
            </Select>
        </div>
    );
};
