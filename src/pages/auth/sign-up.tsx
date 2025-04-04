import { registerRestaurante } from "@/api/register.restaurant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { string, z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: string().email(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  const navigate = useNavigate();

  const { mutateAsync: registerRestauranteFn } = useMutation({
    mutationFn: registerRestaurante,
  });

  async function handleSignUp(data: SignUpForm) {
    try {
      await registerRestauranteFn({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        email: data.email,
        phone: data.phone,
      });

      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Restaurante cadastrado com sucesso!", {
        action: {
          label: "Login",
          onClick: () => navigate(`/signin/?email=${data.email}`),
        },
      });
    } catch {
      toast.error("Erro ao cadastrar restaurante");
    }
  }

  return (
    <div className="p-8">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link to="/signin">Fazer login</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta grátis
          </h1>
          <p className="text-sm text-muted-foreground">
            Seja um parceiro e comece suas vendas!
          </p>
        </div>

        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
            <Input
              id="restaurantName"
              type="text"
              {...register("restaurantName")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="managerName">Seu nome</Label>
            <Input id="managerName" type="text" {...register("managerName")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register("email")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Seu Telefone</Label>
            <Input id="phone" type="tel" {...register("phone")} />
          </div>

          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Finalizar Cadastro
          </Button>

          <p>
            Ao continuar, você concorda com nossos{" "}
            <a className="underline underline-offset-4" href="">
              termos de serviço
            </a>
            {" e "}
            <a className="underline underline-offset-4" href="">
              políticas de privacidade
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
