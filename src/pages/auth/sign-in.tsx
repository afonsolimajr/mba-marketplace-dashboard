import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import { string, z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signInForm = z.object({
  email: string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm) {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Link de acesso enviado para seu email");
  }

  return (
    <div className="p-8">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link to="/signup">Novo estabelecimento</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar Painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe suas vendas pelo painel do parceiro
          </p>
        </div>

        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register("email")} />
          </div>

          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Acessar Painel
          </Button>
        </form>
      </div>
    </div>
  );
}
