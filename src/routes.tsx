import { Routes, Route } from "react-router";
import Dashboard from "./pages/app/dashboard/dashboard";
import SignIn from "./pages/auth/sign-in";
import AppLayout from "./pages/_layouts/app-layout";
import AuthLayout from "./pages/_layouts/auth-layout";
import Home from "./pages/home/home";
import SignUp from "./pages/auth/sign-up";
import Orders from "./pages/app/orders/orders";

export default function AppRoutes() {
  return (
    <div className="flex flex-col w-full">
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}
