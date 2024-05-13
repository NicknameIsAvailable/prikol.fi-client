import { createColumnHelper } from "@tanstack/react-table"
import { IExpense } from "@/entities/expense";
import { cn } from "@/shared/lib/utils";

const expenseColumnHelper = createColumnHelper<IExpense>()

export const expenseColumns = [
    expenseColumnHelper.accessor("date", {
        id: "date",
        header: "Дата",
        cell: props => 
            <span className="text-pretty">
                {new Date(props.getValue()).toLocaleDateString()}
            </span>
    }),
    expenseColumnHelper.accessor("isExpense", {
        id: "isExpense",
        header: "Трата/Доход",
        cell: props =>
        <span className={cn(props.getValue() ? "text-destructive" : "text-primary", "font-bold")}>
            {props.getValue() ? "Трата": "Доход"}
        </span>
    }),
    expenseColumnHelper.accessor("amount", {
        id: "amount",
        header: "Сумма",
        cell: props => 
            <span className="font-bold">
                {props.getValue()}
            </span>
    }),
    expenseColumnHelper.accessor("description", {
        id: "description",
        header: "Комментарий",
        cell: props => 
            <span className="text-pretty">
                {props.getValue()}
            </span>
    }),
]
