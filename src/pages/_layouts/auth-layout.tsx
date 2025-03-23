import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div>
      <h1>Autentication</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
