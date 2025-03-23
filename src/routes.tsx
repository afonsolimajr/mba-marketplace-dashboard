import { Routes, Route } from "react-router";
import Dashboard from "./pages/app/dashboard";
import SignIn from "./pages/auth/sign-in";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
      //   element={<DefaultLayout />}
      >
        <Route index element={<Dashboard />} />
      </Route>
      <Route
      // element={<AuthLayout />}
      >
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
