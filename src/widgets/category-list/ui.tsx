"use client"

import React, { useMemo } from 'react';
import { CategoryCard } from '@/widgets/category-card';
import { ICategory, useCategoryStore } from '@/entities/category';

export const CategoryList = () => {
    const { getCategories, categories } = useCategoryStore()

    useMemo(() => {
        getCategories()
    }, [])

    return (
        <div className="flex flex-wrap justify-between gap-4">
            {
                categories.length === 0 ? 
                    new Array(10).map((_, index) => <CategoryCard key={index} isLoading={true} />)
                : categories?.map((category: ICategory) => <CategoryCard data={category} key={category.id}/>)
            }
        </div>
    );
};
