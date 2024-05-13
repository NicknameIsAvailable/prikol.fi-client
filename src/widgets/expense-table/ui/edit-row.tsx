import React, { FC } from 'react';
import { EditRowProps } from '../model/edit-row';
import { Button } from '@/shared/ui/button';
import { EditIcon, EllipsisIcon, TrashIcon } from 'lucide-react';
import { AlertDialog, AlertDialogTrigger } from '@/shared/ui/alert-dialog';
import { DeleteExpenseDialog } from './delete-expense-dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { Dialog, DialogTrigger } from '@/shared/ui/dialog';
import { EditExpenseDialog } from './edit-expense-dialog';

export const EditRow: FC<EditRowProps> = ({ row }) => {
    return (
        <Popover>
          <PopoverTrigger asChild>
            <div className="h-full flex justify-center items-center mt-3">
                <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <EllipsisIcon className="h-4 w-4" />
                </Button>
            </div> 
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-2">
            <Dialog>
                <DialogTrigger>
                    <Button className="w-full">
                        <EditIcon className="mr-2"/>
                        Редактировать
                    </Button>
                </DialogTrigger>
                <EditExpenseDialog id={row.original.id} />
            </Dialog>
            
            <AlertDialog>
                <AlertDialogTrigger className="w-full">
                    <Button variant="destructive" className="w-full">
                        <TrashIcon className="mr-2"/>
                        Удалить
                    </Button>
                </AlertDialogTrigger>
                <DeleteExpenseDialog id={row.original.id} />
            </AlertDialog>
          </PopoverContent>
        </Popover>
    );
};
