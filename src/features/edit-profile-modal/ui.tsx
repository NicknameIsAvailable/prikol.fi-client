import { zodResolver } from '@hookform/resolvers/zod';
import { EditIcon } from 'lucide-react';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUpdateInputs, useAuthStore } from '@/entities/auth';
import { Button } from '@/shared/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { updateFormSchema } from './model';

export const EditProfileModal = () => {
    const { nickname, email, updateProfile } = useAuthStore()

    const form = useForm<IUpdateInputs>({
        resolver: zodResolver(updateFormSchema),
    })

    const onSubmit: SubmitHandler<IUpdateInputs> = (data) => {
        updateProfile(data);
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button> <EditIcon className="mr-2"/> Редактировать</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Редактировать профиль
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form className="flex flex-col gap-2" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                            control={form.control}
                            name='email'
                            defaultValue={email}
                            render={() => (
                            <FormItem>
                                <FormLabel>Почта</FormLabel>
                                <FormControl>
                                <Input 
                                    type='email' 
                                    placeholder='Почта'
                                    {...form.register('email')}
                                />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='nickname'
                            defaultValue={nickname}
                            render={() => (
                            <FormItem>
                                <FormLabel>Никнейм</FormLabel>
                                <FormControl>
                                <Input 
                                    type='name' 
                                    placeholder='Никнейм'
                                    {...form.register('nickname')}
                                />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={() => (
                            <FormItem>
                                <FormLabel>Пароль</FormLabel>
                                <FormControl>
                                <Input 
                                    type='password' 
                                    placeholder='Пароль'
                                    {...form.register('password')}
                                />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit">
                            Обновить профиль
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};
