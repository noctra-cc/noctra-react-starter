import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  Button,
  SidebarTrigger,
} from "@/shared/components/ui";
import { ThemeToggle } from "@/shared/components/theme/ThemeToggle";
import { useAuthGuard } from "@/features/auth/guards/useAuthGuard";
import { Outlet, useNavigate } from "react-router";
import { Home, User, Settings, LogOut, Menu } from "lucide-react";
import { useAuthStore } from "@/features/auth/stores/useAuthStore";
import { cn } from "../lib/utils";

export default function MainLayout() {
  const { loading, session } = useAuthGuard("protected");
  const { signOut } = useAuthStore();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-surface text-on-surface">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!session) return null;

  const navItems = [
    { label: "Home", icon: Home, path: "/home" },
    { label: "Profile", icon: User, path: "/profile" },
    { label: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-surface text-on-surface w-full">
        {/* ✅ Shadcn Sidebar */}
        <Sidebar className="border-border bg-sidebar text-sidebar-foreground">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarMenu>
                {navItems.map(({ label, icon: Icon, path }) => {
                  const isActive = location.pathname.startsWith(path);
                  return (
                    <SidebarMenuItem key={path}>
                      <SidebarMenuButton
                        onClick={() => navigate(path)}
                        className={cn(
                          "flex items-center",
                          isActive
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "hover:bg-muted"
                        )}
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {label}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <Button
              variant="ghost"
              className="w-full justify-start mt-2"
              onClick={async () => {
                await signOut();
                navigate("/auth/login");
              }}
            >
              <LogOut className="h-4 w-4 mr-2" /> Logout
            </Button>
          </SidebarFooter>
        </Sidebar>

        {/* Main content */}
        <main className="flex-1 flex flex-col">
          <header className="flex items-center justify-between px-6 py-3 border-b border-border bg-surface-muted">
            <div className="flex items-center gap-2">
              {/* Sidebar Trigger visible only on mobile */}
              <div className="md:hidden">
                <SidebarTrigger>
                  <Menu className="h-5 w-5" />
                </SidebarTrigger>
              </div>
              <h1 className="text-lg font-semibold">
                {navItems.find((item) =>
                  location.pathname.startsWith(item.path)
                )?.label || "Dashboard"}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </header>

          <section className="flex-1 p-6">
            <Outlet />
          </section>
        </main>
      </div>
    </SidebarProvider>
  );
}
