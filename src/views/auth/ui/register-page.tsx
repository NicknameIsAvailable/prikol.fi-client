"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegistrationData, useAuthStore } from '@/entities/auth';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { registerFormSchema } from '../model';

export const RegisterPage = () => {
    const form = useForm<IRegistrationData>({
        resolver: zodResolver(registerFormSchema)
    })

    const router = useRouter()

    const { register } = useAuthStore()

    const onSubmit: SubmitHandler<IRegistrationData> = (data) => {
        register(data).then((res: any) => {
            if (res.data.user) {
                router.replace("/")
            }
        });
    }

    return (
        <div>
            <h1 className="text-3xl text-center font-semibold tracking-tight transition-colors first:mt-0">
                Регистрация
            </h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Card className='mt-4 p-4 flex flex-col gap-2'>
                        <FormField
                            control={form.control}
                            name='email'
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
                            render={() => (
                            <FormItem>
                                <FormLabel>Почта</FormLabel>
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
                        <FormField
                            control={form.control}
                            name='repeatPassword'
                            render={() => (
                            <FormItem>
                                <FormLabel>Повторите пароль</FormLabel>
                                <FormControl>
                                <Input 
                                    type='password' 
                                    placeholder='Пароль'
                                    {...form.register('repeatPassword')}
                                />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit">
                            Зарегистрироваться
                        </Button>
                    </Card>
                </form>
            </Form>
            <Link href="/auth/register" className="text-center mt-2">
                У меня есть профиль
            </Link>
        </div>
    );
};
