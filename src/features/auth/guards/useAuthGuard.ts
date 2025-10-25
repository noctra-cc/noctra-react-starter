import { useEffect, useRef } from "react";
import { useAuthStore } from "../stores/useAuthStore";
import { useNavigate, useLocation } from "react-router";

export function useAuthGuard(mode: "auth" | "protected" = "protected") {
  const navigate = useNavigate();
  const location = useLocation();
  const { session, loading, initialize } = useAuthStore();
  const initialized = useRef(false);

  // 🧠 Solo inicializa una vez
  useEffect(() => {
    if (!initialized.current) {
      initialize();
      initialized.current = true;
    }
  }, [initialize]);

  // 🚦 Control de rutas
  useEffect(() => {
    if (loading) return;

    const isAuthRoute = location.pathname.startsWith("/auth");

    if (mode === "protected" && !session && !isAuthRoute) {
      navigate("/auth/login", { replace: true });
    }

    if (mode === "auth" && session && isAuthRoute) {
      navigate("/home", { replace: true });
    }
  }, [loading, session, mode, navigate, location.pathname]);

  return { session, loading };
}
