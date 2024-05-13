import { IExpense } from "@/entities/expense";
import { Row } from "@tanstack/react-table";

export interface EditRowProps {
    row: Row<IExpense>;
}