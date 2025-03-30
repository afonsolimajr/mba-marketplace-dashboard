import "@/index.css";
import AppRoutes from "./routes";

export function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <AppRoutes />
    </div>
  );
}
