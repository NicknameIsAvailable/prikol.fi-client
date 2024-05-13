"use client"

import { useExpenseStore } from '@/entities/expense';
import { AlertDialogDescription, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/shared/ui/alert-dialog';
import { PopoverClose } from '@radix-ui/react-popover';
import React from 'react';

export const DeleteExpenseDialog = ({ id }: { id: string }) => {
    const { deleteExpense } = useExpenseStore()

    return (
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Удалить запись?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Запись будет удалена безвозвратно!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <PopoverClose>
                        <AlertDialogCancel>Отмена</AlertDialogCancel>
                    </PopoverClose>
                    <PopoverClose>
                        <AlertDialogAction onClick={() => deleteExpense(id)}>Удалить</AlertDialogAction>
                    </PopoverClose>
                </AlertDialogFooter>
            </AlertDialogContent>
    );
};
