import { Button, Input } from "@/shared/components/ui";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginForm } from "../typings";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const navigate = useNavigate();
  const { signIn, loading } = useAuth();

  // Setup form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  // Handle submit
  const onSubmit = async (data: LoginForm) => {
    try {
      await signIn(data.email, data.password);
      toast.success("Logged in successfully!");
      setTimeout(() => navigate("/home", { replace: true }), 50);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Login failed. Try again.";
      toast.error(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
      {/* Email field */}
      <Input
        placeholder="Email"
        type="email"
        {...register("email")}
        disabled={loading}
      />
      {errors.email && (
        <p className="text-sm text-error mt-1">{errors.email.message}</p>
      )}

      {/* Password field */}
      <Input
        placeholder="Password"
        type="password"
        {...register("password")}
        disabled={loading}
      />
      {errors.password && (
        <p className="text-sm text-error mt-1">{errors.password.message}</p>
      )}

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Logging in..." : "Log In"}
      </Button>

      <p className="text-sm text-center text-muted-foreground">
        Don’t have an account?{" "}
        <Link to="/auth/sign-up" className="text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
