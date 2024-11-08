import { z } from "zod";


export const signinSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .refine(
        (value) => {
          const hasUppercase = /[A-Z]/.test(value);
          const hasNumber = /[0-9]/.test(value);
          if (!hasUppercase || !hasNumber) {
            return false;
          }
          return true;
        },
        {
          message:
            "Password must contain at least one uppercase letter and one number.",
        }
      ),
    remember: z.boolean().default(false).optional(),
  });