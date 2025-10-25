import "./shared/assets/styles/global.css";
import { ENV } from "./config/environment.ts";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AuthLayout from "./shared/layouts/AuthLayout.tsx";
import LoginScreen from "./features/auth/screens/LoginScreen.tsx";
import SignupScreen from "./features/auth/screens/SignUpScreen.tsx";
import MainLayout from "./shared/layouts/MainLayout.tsx";
import HomeScreen from "./features/home/screens/HomeScreen.tsx";
import { Toaster } from "@/shared/components/ui/sonner";

if (ENV?.APP_ENV === "development") {
  console.log("Running in dev mode");
}

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Toaster />
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="sign-up" element={<SignupScreen />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<HomeScreen />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
