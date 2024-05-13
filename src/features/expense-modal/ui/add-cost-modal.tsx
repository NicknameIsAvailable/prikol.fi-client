"use client"

import React from 'react';
import { Button } from '@/shared/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader, DialogPortal } from '@/shared/ui/dialog';
import { AddCostForm } from './add-cost-form';
import { useCategoryStore } from '@/entities/category';

export const AddCostModal = () => {
    const { currentCategory } = useCategoryStore()

    if (currentCategory)
        return (
            <Dialog>
                <DialogTrigger>
                    <Button>
                        Добавить запись
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Добавить запись
                        </DialogTitle>
                    </DialogHeader>
                    <AddCostForm />
                </DialogContent>
            </Dialog>
        );
};
