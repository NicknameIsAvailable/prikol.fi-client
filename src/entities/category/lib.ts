import { toast } from "sonner";
import { create } from "zustand";
import { apiWithAuth } from "../api";
import { ICategory, TCategoryStore, TCategoryState } from "./model";

export const useCategoryStore = create<TCategoryStore>((set) => ({
    categories: [],
    getCategories: async () => {
        try {
            const res = await apiWithAuth.get("/category")
            set((state: TCategoryState) => state.categories = res.data);
        }
        catch (err) {
            toast("Не удалось получить категории", {
                description: "Попробуйте еще раз",
            })
            console.log(err)
        }
    },
    getCategory: async (id: string) => {
        try {
            const res = await apiWithAuth.get(`/category/${id}`)
            set((state: TCategoryState) => state.currentCategory = res.data[0]);
        }
        catch (err) {
            toast("Не удалось получить категорию", {
                description: "Попробуйте еще раз",
            })
            console.log(err)
        }
    },
    createCategory: async (data: ICategory) => {
        try {
            await apiWithAuth.post(`/category`, data)
        }
        catch (err) {
            toast("Не удалось создать категорию", {
                description: "Попробуйте еще раз",
            })
            console.log(err)
        }
    },
    updateCategory: async (id: string, data: ICategory) => {
        try {
            await apiWithAuth.put(`/category/${id}`, data)
        }
        catch (err) {
            toast("Не удалось получить категорию", {
                description: "Попробуйте еще раз",
            })
            console.log(err)
        }
    } 
})) 