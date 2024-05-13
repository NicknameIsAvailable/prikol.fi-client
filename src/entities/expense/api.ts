import { toast } from "sonner";
import { create } from "zustand";
import { apiWithAuth } from "../api";
import { ICreateExpenseData, TExpenseStore } from "./model";
import { useCategoryStore } from "../category";

export const useExpenseStore = create<TExpenseStore>((set, get) => ({
    createExpense: async (categoryId: string, data: ICreateExpenseData) => {
        try {
            const res = await apiWithAuth.post(`/expense/${categoryId}`, data);
            if (res.data)
                set((state) => ({...state, expenses: res.data}))
            return res.data;
        } 
        catch (err) {
            toast("Не удалось создать трату", {
                description: "Попробуйте еще раз",
            })
            console.log(err)
        }
    },
    clearExpenses: () => {
        set((state) => ({...state, expenses: undefined}))
    },
    updateExpense: async (id: string, data: ICreateExpenseData) => {
        try {
            const res = await apiWithAuth.put(`/expense/${id}`, data);
            if (res.data) {
                const { currentCategory } = useCategoryStore.getState(); // Получение текущей категории напрямую
                set((state) => {
                    if (currentCategory) {
                        state.getByCategory(currentCategory.id);
                    } else {
                        state.getExpenses();
                    }
                    return state;
                });
            }
            return res.data;
        } catch (err) {
            toast("Не удалось обновить трату", {
                description: "Попробуйте еще раз",
            });
            console.log(err);
        }
    },
    deleteExpense: async (id: string) => {
        try {
            const res = await apiWithAuth.delete(`/expense/${id}`);
            if (res.data)
                set((state) => ({...state, expenses: state.expenses?.filter(expense => expense.id !== id)}))
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
            console.log("getting by category")
            const res = await apiWithAuth.get(`/expense/category/${id}`);
            set((state) => state.expenses = res.data);
            console.log(123, res.data)
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