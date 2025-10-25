import { Button, Input } from "@/shared/components/ui";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { signIn, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await signIn(email, password);
      toast.success("Logged in successfully!");
      setTimeout(() => navigate("/home", { replace: true }), 50);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Login failed. Try again.";
      toast.error(message);
    }
  }

  return (
    <form onSubmit={handleLogin} className="w-full space-y-4">
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

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
