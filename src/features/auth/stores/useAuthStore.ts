import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ISession } from "../typings";

interface AuthState {
  session: ISession | null;
  loading: boolean;
  setSession: (session: ISession | null) => void;
  initialize: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      session: null,
      loading: true,

      // manually set session (for mock login)
      setSession: (session) => set({ session }),

      // pretend to load session from backend
      initialize: async () => {
        const { session } = get();

        // If session already exists, just stop loading
        if (session) {
          set({ loading: false });
          return;
        }

        set({ loading: true });
        await new Promise((r) => setTimeout(r, 300));
        set({ loading: false });
      },

      // clear session (mock sign out)
      signOut: async () => {
        await new Promise((r) => setTimeout(r, 200));
        set({ session: null });
      },
    }),
    {
      name: "auth-storage", // key in localStorage
      partialize: (state) => ({ session: state.session }), // persist only session
    }
  )
);
