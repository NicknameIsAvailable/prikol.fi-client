import { z, ZodType } from "zod";
import { ILoginInputs } from "@/entities/auth";

export const loginFormSchema: ZodType<ILoginInputs> = z.object({
    email: z
        .string()
        .email()
        .min(6, {
            message: "Почта слишком короткая"
        })
        .max(256, {
            message: "Почта слишком длинная"
        }),
    password: z
        .string()
        .min(6, {
            message: "Пароль слишком короткий"
        })
        .max(256, {
            message: "Пароль слишком длинный"
        })
})
