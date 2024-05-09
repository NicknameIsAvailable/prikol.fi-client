import { PlusIcon } from 'lucide-react';
import React from 'react';
import { Button } from '@/shared/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader } from '@/shared/ui/dialog';
import { AddCostForm } from './add-cost-form';

export const AddCostModal = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button size="lg">
                    <PlusIcon className="mr-2" />
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
