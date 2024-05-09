import Link from 'next/link';
import { FC } from 'react';
import { Card } from '@/shared/ui/card';
import { CategoryCardProps } from '../model';
import { CategoryCardLoading } from './category-card-loading';

export const CategoryCard: FC<CategoryCardProps> = ({ data, isLoading }) => {
    if (isLoading)
        return <CategoryCardLoading />

    return (
        <Link href={`/category/${data?.id}`}>
            <Card style={{ borderColor: data?.color, backgroundColor: `${data?.color}30` }} className="p-3 h-40 w-40 flex flex-col gap-2 justify-center items-center">
                <h2 style={{ color: data?.color }} className="text-center">{data?.name}</h2>
                <span 
                    style={{
                        color: data?.color
                    }}
                    className="font-bold text-xl"
                >
                    {data?.calc.difference}
                </span>
            </Card>
        </Link>
    );
};
