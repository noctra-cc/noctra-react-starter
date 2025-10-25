import { Outlet } from "react-router";
import { Card, CardContent } from "@/shared/components/ui/card";
import { cn } from "@/shared/lib/utils";
import { ThemeToggle } from "../components/theme/ThemeToggle";
import { useAuthGuard } from "@/features/auth/guards/useAuthGuard";

export default function AuthLayout() {
  const { loading, session } = useAuthGuard("auth");

  // Wait for initialization
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-surface text-on-surface">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  // No need for nosession — guard will redirect
  if (session) return <div>session: {`${session}`}</div>;

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-surface/60 text-on-surface px-6">
      <div className="absolute inset-0 bg-linear-to-br from-primary-500/50 to-secondary-500/50 blur-3xl -z-30" />

      <Card
        className={cn(
          "relative z-10 w-full max-w-md p-6 shadow-xl bg-surface/80 backdrop-blur-md mb-10"
        )}
      >
        <CardContent>
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-3xl font-semibold text-primary-700 dark:text-primary-300">
              Welcome
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              Please sign in or create an account to continue.
            </p>

            {/* The Outlet renders the current auth route (Login or Signup) */}
            <Outlet />
          </div>
        </CardContent>
      </Card>

      <ThemeToggle />
    </div>
  );
}
