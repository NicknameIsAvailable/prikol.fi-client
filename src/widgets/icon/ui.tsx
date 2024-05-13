"use client"

import React, { FC, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/skeleton';
import { IIConProps } from './model';
import dynamic from 'next/dynamic';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

const fallback = <Skeleton className='h-6 w-6 rounded-full'/>

export const Icon: FC<IIConProps> = ({ name, ...props }) => {
    const LucideIcon = dynamic(dynamicIconImports[name]);

    return (
        <Suspense fallback={fallback}>
          <LucideIcon {...props} />
        </Suspense>
      );
};
