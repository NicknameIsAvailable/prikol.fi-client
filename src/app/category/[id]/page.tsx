import React, { FC } from 'react';
import { CategoryPage } from '@/views/category';
import { ICategoryParams } from '@/views/category';

const Page: FC<ICategoryParams> = ({ params }) => {
    return <CategoryPage params={params} />;
};

export default Page;