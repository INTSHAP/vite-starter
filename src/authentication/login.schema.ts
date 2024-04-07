import { LoginFormData } from "@/types/auth/login.types";
import { z, ZodType } from "zod";

const UserLoginSchema: ZodType<LoginFormData> = z.object({
  email: z
    .string()
    .email({ message: "Invalid email" })
    .trim()
    .min(1, { message: "Email required!" }),
  password: z
    .string()
    .min(1, { message: "Password required!" })
    .min(8, { message: "Password too short" }),
});

export default UserLoginSchema;
