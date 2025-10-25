import z from "zod";

const loginSchema = z.object({
  email: z.email("Enter a valid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export { loginSchema };
export type { LoginForm };
