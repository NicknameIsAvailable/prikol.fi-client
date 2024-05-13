"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from "date-fns"
import { CalendarIcon, CheckIcon } from 'lucide-react';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/entities/category';
import { ICreateExpenseData } from '@/entities/expense';
import { useExpenseStore } from '@/entities/expense';
import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';
import { Checkbox } from '@/shared/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { createExpenseFormSchema } from '../model';
import { DialogClose } from '@/shared/ui/dialog';

export const AddCostForm = () => {
    const { currentCategory } = useCategoryStore();
    const { createExpense } = useExpenseStore();
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const categoryId = currentCategory?.id;

    const form = useForm<ICreateExpenseData>({
        resolver: zodResolver(createExpenseFormSchema)
    })

    const onSubmit: SubmitHandler<ICreateExpenseData> = (data) => {
        if (categoryId){
            const res = createExpense(categoryId, data)
            if (res.data) {
                setIsSuccess(true)
            }
        }
    }

    if (isSuccess) 
        return (
            <div className="flex flex-col gap-4 justify-center">
                <div className='w-24 h-24 rounded-full'>
                    <CheckIcon className="w-full h-full"/>
                </div>
                <DialogClose asChild>
                    <Button>Закрыть</Button>
                </DialogClose>
            </div>
        )

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name='amount'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Сумма</FormLabel>
                            <FormControl>
                                <Input
                                    type='number'
                                    placeholder='0.00'
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(parseFloat(e.target.value));
                                    }}
                                />
                            </FormControl>
                            <FormDescription />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='description'
                    render={() => (
                    <FormItem>
                        <FormLabel>Комментарий</FormLabel>
                        <FormControl>
                        <Input 
                            type='text' 
                            placeholder='Купил шоколадку'
                            {...form.register('description')}
                        />
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                        <FormLabel>Дата</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                                >
                                {field.value ? (
                                    format(field.value, "PPP")
                                ) : (
                                    <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                            />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='isExpense'
                    render={({ field }) => (
                    <FormItem className="flex items-center gap-2">
                        <FormControl>
                            <Checkbox
                                checked={field.value || false}
                                onCheckedChange={field.onChange}
                            />
                        </FormControl>
                        <div className="-mt-2">
                            <FormLabel>
                                Это трата
                            </FormLabel>
                        </div>
                    </FormItem>
                    )}
                />
                <Button type="submit">Записать</Button>
            </form>
        </Form>
    );
};
