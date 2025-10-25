import { useCallback, useMemo, useState } from "react";
import { useAuthStore } from "../stores/useAuthStore";
import type { ISession, IUser } from "../typings";

interface AuthResult {
  session: ISession;
}

export function useAuth() {
  const { setSession, signOut: storeSignOut } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 🧩 In-memory user "database"
  const users = useMemo<IUser[]>(() => {
    return [
      {
        id: "1",
        email: "noctra@example.com",
        password: "123456",
        name: "Noctra Mock",
      },
    ];
  }, []);

  const signUp = useCallback(
    async (email: string, password: string): Promise<AuthResult> => {
      setLoading(true);
      setError(null);
      try {
        await new Promise((r) => setTimeout(r, 300));

        const existing = users.find((u) => u.email === email);
        if (existing) throw new Error("User already exists");

        const newUser: IUser = {
          id: Date.now().toString(),
          email,
          password,
          name: email.split("@")[0],
        };
        users.push(newUser);

        const session: ISession = {
          user: { id: newUser.id, email: newUser.email, name: newUser.name },
        };
        setSession(session);
        return { session };
      } catch (err) {
        const message = err instanceof Error ? err.message : "Sign Up Error";
        setError(message);
        throw new Error(message);
      } finally {
        setLoading(false);
      }
    },
    [setSession, users]
  );

  const signIn = useCallback(
    async (email: string, password: string): Promise<AuthResult> => {
      setLoading(true);
      setError(null);
      try {
        await new Promise((r) => setTimeout(r, 300));

        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        if (!user) throw new Error("Invalid credentials");

        const session: ISession = {
          user: { id: user.id, email: user.email, name: user.name },
        };
        console.log(session);
        setSession(session);
        return { session };
      } catch (err) {
        const message = err instanceof Error ? err.message : "Sign In Error";
        setError(message);
        throw new Error(message);
      } finally {
        setLoading(false);
      }
    },
    [setSession, users]
  );

  const signOut = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((r) => setTimeout(r, 200));
      await storeSignOut();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Sign Out Error";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [storeSignOut]);

  return {
    loading,
    error,
    signUp,
    signIn,
    signOut,
  };
}
