"use client"

import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import React, { FC, useEffect } from 'react';
import { useExpenseStore } from '@/entities/expense';
import { Card } from '@/shared/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/ui/table';
import { expenseColumns, expenseWithCategoryColumns, IExpenseTableProps } from '../model';
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/shared/ui/pagination';
import { EditRow } from './edit-row';

export const ExpenseTable: FC<IExpenseTableProps> = ({ categoryId }) => {
    const { expenses, getExpenses, getByCategory } = useExpenseStore()

    const columns = categoryId ? expenseColumns : expenseWithCategoryColumns

    const table = useReactTable({
        data: expenses || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    useEffect(() => {
        if (categoryId)
            getByCategory(categoryId);
        else
            getExpenses()
    }, [categoryId, getByCategory, getExpenses])

    return (
        <Card className="p-4 flex flex-col gap-4">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                            <TableHead key={header.id}>
                                {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                    )}
                            </TableHead>
                            )
                        })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                                <EditRow row={row} />
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={expenseColumns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious 
                            onClick={() => table.previousPage()}
                        />
                    </PaginationItem>
                    
                    <PaginationItem>
                        <PaginationNext 
                            onClick={() => table.nextPage()}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </Card>
    );
};
