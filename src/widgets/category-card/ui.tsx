import { FC } from 'react';
import { Card } from '@/shared/ui/card';
import { CategoryCardProps } from './model';

const CategoryCard: FC<CategoryCardProps> = ({ data }) => {
    return (
        <Card>
            <h2>{data.name}</h2>
        </Card>
    );
};

export default CategoryCard;