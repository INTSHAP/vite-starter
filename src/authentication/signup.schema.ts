import { LoginFormData } from "@/types/auth/login.types";
import { z, ZodType } from "zod";

const UserSignupSchema: ZodType<LoginFormData> = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password too short" }),
    confirmPassword: z.string().min(8, { message: "Password too short" }),
    firstname: z.string().trim(),
    lastname: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export default UserSignupSchema;
