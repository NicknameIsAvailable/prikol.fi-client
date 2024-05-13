import { ICategory, ICategoryCreateData } from "@/entities/category";
import { z, ZodType } from "zod";

export interface CategoryCardProps {
    data?: ICategory;
    isLoading?: boolean;
}

export const createCategorySchema: ZodType<ICategoryCreateData> = z.object({
    name: z
        .string()
        .min(6),
    description: z 
        .string()
        .min(30)
        .max(300),
    iconName: z 
        .string(),
    color: z
        .string()
})
