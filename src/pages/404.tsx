import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para o{" "}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Início
        </Link>
      </p>
    </div>
  );
}
