import { ICreateExpenseData } from "@/entities/expense";
import { z, ZodType } from "zod";

export const updateExpenseFormSchema: ZodType<ICreateExpenseData> = z.object({
    amount: z
        .number(),
    description: z
        .string()
        .max(1000),
    date: z
        .date(),
    isExpense: z
        .boolean()
        .default(false)
})