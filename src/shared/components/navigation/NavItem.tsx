import { cn } from "@/shared/lib/utils";
import { NavLink } from "react-router";

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "block px-3 py-2 rounded-lg transition-colors",
          isActive
            ? "bg-primary-100 text-primary-700 dark:bg-primary-700 dark:text-primary-100"
            : "hover:bg-sidebar-accent dark:hover:bg-primary-900/50 hover:text-sidebar-accent-foreground"
        )
      }
    >
      {label}
    </NavLink>
  );
}

export default NavItem;
