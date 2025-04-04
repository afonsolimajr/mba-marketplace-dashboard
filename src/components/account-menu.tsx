import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { getProfile } from "@/api/get-profile";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { Skeleton } from "./ui/skeleton";
import { Dialog, DialogTrigger } from "./ui/dialog";
import StoreProfileDialog from "./store-profile-dialog";
import { signOut } from "@/api/sign-out";
import { useNavigate } from "react-router";
import { NavLink } from "./nav-link";

export default function AccountMenu() {
  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const navigate = useNavigate();

  const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
    useQuery({
      queryKey: ["managed-restaurant"],
      queryFn: getManagedRestaurant,
    });

  const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate("/signin", { replace: true });
    },
  });

  return (
    <Dialog>
      {isLoadingManagedRestaurant ? (
        <Skeleton className="h-8 w-32" />
      ) : managedRestaurant ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="outline"
              className="flex select-none items-center gap-2"
            >
              {isLoadingManagedRestaurant ? (
                <Skeleton className="h-4 w-48" />
              ) : (
                managedRestaurant?.name
              )}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="flex flex-col">
              {isLoadingProfile ? (
                <div className="space-y-1.5">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ) : (
                <>
                  <span>{profile?.name}</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    {profile?.email}
                  </span>
                </>
              )}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DialogTrigger asChild>
              <DropdownMenuItem>
                <Building className="mr-2 h-4 w-4" />
                <span>Perfil da loja</span>
              </DropdownMenuItem>
            </DialogTrigger>
            <DropdownMenuItem
              asChild
              className="text-orange-700 dark:text-orange-400"
              disabled={isSigningOut}
            >
              <button
                onClick={() => {
                  signOutFn();
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-2">
          <NavLink to="/signin">Entrar</NavLink>
          <NavLink to="/signup">Cadastrar</NavLink>
        </div>
      )}
      <StoreProfileDialog />
    </Dialog>
  );
}
