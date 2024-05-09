import { z, ZodType } from "zod";
import { IFormInputData } from "@/features/form-helper";
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

export const loginFields: IFormInputData[] = [
    {
        name: "email",
        type: "email",
        label: "Почта",
        placeholder: "name@domain.com",
        rules: {}
    },
    {
        name: "password",
        type: "password",
        label: "Пароль",
        placeholder: "12345678",
        rules: {}
    },
]