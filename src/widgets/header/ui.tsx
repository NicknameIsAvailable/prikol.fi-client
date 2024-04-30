'use client'

import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/shared/ui/sheet';

export const Header = () => {
    return (
        <header>
            <Card className='top-0 fixed w-screen py-2 rounded-none bg-opacity-30 backdrop-blur-md'>
                <div className='container mx-auto flex justify-between'>
                    <Link href="/">
                        <h1 className='text-3xl font-semibold tracking-tight transition-colors first:mt-0'>prikol.fi</h1>                    
                    </Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline"><MenuIcon/></Button>
                        </SheetTrigger>
                        <SheetContent>
                            <div className='flex flex-col gap-2'>

                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </Card>
        </header>
    );
};
