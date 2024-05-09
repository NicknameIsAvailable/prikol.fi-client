import { z, ZodType } from "zod";
import { IUpdateInputs } from "@/entities/auth";

export const updateFormSchema: ZodType<IUpdateInputs> = z.object({
    email: z
        .string()
        .email()
        .min(6, {
            message: "Почта слишком короткая"
        })
        .max(256, {
            message: "Почта слишком длинная"
        })
        .optional(),
    nickname: z
        .string()
        .min(6, {
            message: "Никнейм слишком короткий"
        })
        .max(256, {
            message: "Никнейм слишком длинный"
        })
        .optional(),
    password: z
        .string()
        .min(6, {
            message: "Пароль слишком короткий"
        })
        .max(256, {
            message: "Пароль слишком длинный"
        })
        .optional(),
})