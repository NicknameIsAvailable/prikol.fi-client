import { z, ZodType } from "zod";
import { IRegistrationData } from "@/entities/auth";

export const registerFormSchema: ZodType<IRegistrationData> = z.object({
    email: z
        .string()
        .email()
        .min(6, {
            message: "Почта слишком короткая"
        })
        .max(256, {
            message: "Почта слишком длинная"
        }),
    nickname: z
        .string()
        .min(6, {
            message: "Никнейм слишком короткий"
        })
        .max(256, {
            message: "Никнейм слишком длинный"
        }),
    password: z
        .string()
        .min(6, {
            message: "Пароль слишком короткий"
        })
        .max(256, {
            message: "Пароль слишком длинный"
        }),
    repeatPassword: z
        .string()
        .min(6, {
            message: "Пароль слишком короткий"
        })
        .max(256, {
            message: "Пароль слишком длинный"
        })
})