import { z, ZodType } from "zod";
import { ICreateExpenseData } from "@/entities/expense";

export const createExpenseFormSchema: ZodType<ICreateExpenseData> = z.object({
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
});
