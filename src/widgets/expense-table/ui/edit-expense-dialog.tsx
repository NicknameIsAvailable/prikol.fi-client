"use client"

import { ICreateExpenseData, useExpenseStore } from '@/entities/expense';
import { Button } from '@/shared/ui/button';
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/shared/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { updateExpenseFormSchema } from '../model';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { format } from 'date-fns';
import { Calendar } from '@/shared/ui/calendar';
import { Checkbox } from '@/shared/ui/checkbox';

export const EditExpenseDialog = ({ id }: { id: string }) => {
    const { updateExpense, expenses } = useExpenseStore();
    const expense = expenses?.find(expense => expense.id === id);

    const defaultValues: ICreateExpenseData = {
        amount: expense?.amount || 0,
        description: expense?.description || "",
        date: expense?.date || new Date(),
        isExpense: expense?.isExpense || false,
    }

    console.log(defaultValues)

    const form = useForm<ICreateExpenseData>({
        resolver: zodResolver(updateExpenseFormSchema),
        defaultValues,
    })

    const onSubmit: SubmitHandler<ICreateExpenseData> = (data) => {
        updateExpense(id, data)
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Редактирование записи
                </DialogTitle>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
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
                                placeholder='Комментарий'
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
                            <div className="-mt-4">
                                <FormLabel>
                                    Это трата
                                </FormLabel>
                            </div>
                    </FormItem>
                    )}
                />
                    <DialogFooter>
                        <DialogClose>
                            <Button variant="outline">
                                Отмена
                            </Button>
                        </DialogClose>
                        <Button type="submit">
                            Сохранить
                        </Button>
                    </DialogFooter>
                </form>
            </Form>
        </DialogContent>
    );
};
