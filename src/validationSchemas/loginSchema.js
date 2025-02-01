import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("email недействителен"),
    password: z.string().min(8, "пароль должен содержать минимум 8 символов").max(25, "пароль не может быть более 25 символов"),
});
