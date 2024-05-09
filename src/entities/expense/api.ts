import { toast } from "sonner";
import { create } from "zustand";
import { apiWithAuth } from "../api";
import { ICreateExpenseData, TExpenseStore } from "./model";

export const useExpenseStore = create<TExpenseStore>((set) => ({
    createExpense: async (categoryId: string, data: ICreateExpenseData) => {
        try {
            const res = await apiWithAuth.post(`/expense/${categoryId}`, data);
            return res.data;
        } 
        catch (err) {
            toast("Не удалось создать трату", {
                description: "Попробуйте еще раз",
            })
            console.log(err)
        }
    },
    updateExpense: async (id: string, data: ICreateExpenseData) => {
        try {
            const res = await apiWithAuth.put(`/expense/${id}`, data);
            return res.data;
        } 
        catch (err) {
            toast("Не удалось обновить трату", {
                description: "Попробуйте еще раз",
            })
            console.log(err)
        }
    },
    deleteExpense: async (id: string) => {
        try {
            const res = await apiWithAuth.delete(`/expense/${id}`);
            return res.data;
        } 
        catch (err) {
            toast("Не удалось удалить трату", {
                description: "Попробуйте еще раз",
            })
            console.log(err)
        }
    },
    getExpenses: async () => {
        try {
            const res = await apiWithAuth.get(`/expense`);
            set((state) => state.expenses = res.data);
            return res.data;
        } 
        catch (err) {
            toast("Не удалось получить траты", {
                description: "Попробуйте еще раз",
            })
            console.log(err)
        }
    },
    getByCategory: async (id: string) => {
        try {
            const res = await apiWithAuth.get(`/expense/category/${id}`);
            set((state) => state.expenses = res.data);
            return res.data;
        } 
        catch (err) {
            toast("Не удалось получить траты", {
                description: "Попробуйте еще раз",
            })
            console.log(err)
        }
    },
    getExpense: async (id: string) => {
        try {
            const res = await apiWithAuth.get(`/expense/${id}`);
            set((state) => state.currentExpense = res.data);
            return res.data;
        } 
        catch (err) {
            toast("Не удалось получить трату", {
                description: "Попробуйте еще раз",
            })
            console.log(err)
        }
    }
}))