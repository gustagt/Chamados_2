import { z } from "zod";

export const LoginFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Digite seu usuario." })
    .trim(),
  password: z
    .string()
    .min(1, { message: "Digite sua senha."})
    .trim(),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
