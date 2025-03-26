import { Routes, Route } from "react-router";
import Dashboard from "./pages/app/dashboard/dashboard";
import SignIn from "./pages/auth/sign-in";
import AppLayout from "./pages/_layouts/app-layout";
import AuthLayout from "./pages/_layouts/auth-layout";
import SignUp from "./pages/auth/sign-up";
import Orders from "./pages/app/orders/orders";
import NotFound from "./pages/404";

export default function AppRoutes() {
  return (
    <div className="flex flex-col w-full">
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        {/* Rota para páginas não encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
