import { z } from "zod";

// In Vite, all public env vars must start with "VITE_"
const APP_ENV = import.meta.env.VITE_APP_ENV;

// Define and validate
const EnvSchema = z.object({
  APP_ENV: z.enum(["development", "staging", "production"]),
});

const parsed = EnvSchema.safeParse({
  APP_ENV,
});

let ENV: z.infer<typeof EnvSchema> | null = null;
let ENV_ERROR: unknown = null;

if (!parsed.success) {
  ENV_ERROR = parsed.error.flatten();
  console.error(
    "Invalid environment variables:",
    JSON.stringify(ENV_ERROR, null, 2)
  );
} else {
  ENV = parsed.data;
}

export { ENV, ENV_ERROR };
