"use client"

import { LogOutIcon } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';
import { authService } from '@/entities/auth';
import { Button } from '@/shared/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/shared/ui/dialog';

export const LogoutModal = () => {
    const handleLogout = () => {
        try {
            authService.logout()
        } catch (e) {
            toast("Не удалось выйти"),
            console.log(e)
        }
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="destructive"><LogOutIcon className='mr-2'/> Выйти</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>
                    Выйти из профиля
                </DialogTitle>
                <DialogDescription>
                    Вы уверены?
                </DialogDescription>
                <Button variant="destructive" onClick={handleLogout}><LogOutIcon className='mr-2'/> Выйти</Button>
            </DialogContent>
        </Dialog>
    );
};
