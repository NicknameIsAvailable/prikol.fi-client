import { IExpense } from "@/entities/expense";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";

const expenseWithCategoryColumnHelper = createColumnHelper<IExpense>()

export const expenseWithCategoryColumns = [
    expenseWithCategoryColumnHelper.accessor("category", {
        id: "category",
        header: "Категория",
        cell: props => 
            <Link href={`/category/${props.getValue().id}`}>
                <Badge className="text-pretty" style={{color: props.getValue().color, background: `${props.getValue().color}30`}}>
                    {props.getValue().name}
                </Badge>
            </Link>
    }),
    expenseWithCategoryColumnHelper.accessor("date", {
        id: "date",
        header: "Дата",
        cell: props => 
            <span className="text-pretty">
                {new Date(props.getValue()).toLocaleDateString()}
            </span>
    }),
    expenseWithCategoryColumnHelper.accessor("isExpense", {
        id: "isExpense",
        header: "Трата/Доход",
        cell: props =>
        <span className={cn(props.getValue() ? "text-destructive" : "text-primary", "font-bold")}>
            {props.getValue() ? "Трата": "Доход"}
        </span>
    }),
    expenseWithCategoryColumnHelper.accessor("amount", {
        id: "amount",
        header: "Сумма",
        cell: props => 
            <span className="font-bold">
                {props.getValue()}
            </span>
    }),
    expenseWithCategoryColumnHelper.accessor("description", {
        id: "description",
        header: "Комментарий",
        cell: props => 
            <span className="text-pretty">
                {props.getValue()}
            </span>
    }),
]