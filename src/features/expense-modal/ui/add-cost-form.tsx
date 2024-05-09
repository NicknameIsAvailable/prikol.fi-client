"use client"

import { useCategoryStore } from '@/entities/category';
import React from 'react';

export const AddCostForm = () => {
    const { currentCategory } = useCategoryStore();
    const categoryId = currentCategory?.id;

    return (
        <div>
            
        </div>
    );
};
