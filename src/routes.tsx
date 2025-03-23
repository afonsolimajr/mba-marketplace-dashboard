import { Routes, Route } from "react-router";
import Dashboard from "./pages/app/dashboard";
import SignIn from "./pages/auth/sign-in";
import AppLayout from "./pages/_layouts/app-layout";
import AuthLayout from "./pages/_layouts/auth-layout";
import Home from "./pages/home/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
