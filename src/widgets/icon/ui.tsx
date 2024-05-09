"use client"

import dynamicIconImports from 'lucide-react/dynamicIconImports';
import React, { FC, lazy, ReactNode, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/skeleton';
import { IIConProps } from './model';

const fallback = <Skeleton className='h-6 w-6 rounded-full'/>

export const Icon: FC<IIConProps> = ({ name, ...props }) => {
    const LucideIcon = lazy(dynamicIconImports[name]);

    return (
        <Suspense fallback={fallback}>
          <LucideIcon {...props} />
        </Suspense>
      );
};
