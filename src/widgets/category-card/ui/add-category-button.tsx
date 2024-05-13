import { Button } from '@/shared/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog';
import { PlusIcon } from 'lucide-react';
import React from 'react';
import { AddCategoryForm } from './add-category-form';

export const AddCategoryButton = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline" className="p-3 h-40 w-40 flex flex-col justify-center items-center">
                    <PlusIcon className="h-20 w-20"/>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Создать категорию
                    </DialogTitle>
                </DialogHeader>
                <AddCategoryForm />
            </DialogContent>
        </Dialog>
    );
};
