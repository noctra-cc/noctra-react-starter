import { motion } from "framer-motion";
import { useThemeStore } from "../../stores/useThemeStore";
import { Icon } from "@iconify/react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-3 p-3 rounded-xl bg-gray-200 dark:bg-neutral-800 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {/* Icon */}
      {theme === "dark" ? (
        <Icon icon="solar:sun-bold" className="w-5 h-5 text-yellow-400" />
      ) : (
        <Icon icon="solar:moon-bold" className="w-5 h-5 text-blue-600" />
      )}

      {/* Label + Switch */}
      <div className="flex items-center">
        <div className="ml-3 w-10 h-6 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center p-1">
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-4 h-4 bg-white rounded-full shadow-md"
            animate={{
              x: theme === "dark" ? 16 : 0, // move right when dark
            }}
          />
        </div>
      </div>
    </button>
  );
}
