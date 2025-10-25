import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

/**
 * Handles global theme with Tailwind .dark class
 * Persists in localStorage automatically
 */
export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      // Detect system preference initially
      theme:
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light") || "light",

      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";
        set({ theme: newTheme });
        applyTheme(newTheme);
      },

      setTheme: (theme) => {
        set({ theme });
        applyTheme(theme);
      },
    }),
    {
      name: "theme", // key in localStorage
      onRehydrateStorage: () => (state) => {
        if (state?.theme) applyTheme(state.theme);
      },
    }
  )
);

/** Utility to update <html> class for Tailwind dark mode */
function applyTheme(theme: Theme) {
  const html = document.documentElement;
  if (theme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}
