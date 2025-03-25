import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

export default function OrderDetail() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: asldfjkasçldj</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>
      <div className="flex w-full space-y-6">
        <div className="flex w-full flex-col items-center gap-2">
          <div className="flex w-full items-center justify-between">
            <div className="text-muted-foreground">Status</div>
            <div className="">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                <span className="font-medium text-muted-foreground">
                  Pendente
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="text-muted-foreground">Cliente</div>
            <div className="">Nome do Cliente</div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="text-muted-foreground">Telefone</div>
            <div className="">(99) 98765-4321</div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="text-muted-foreground"></div>
            <div className=""></div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="text-muted-foreground">realizado há</div>
            <div className="">15 minutos</div>
          </div>
          <Separator />
          <div className="flex w-full items-center justify-between bg-muted">
            <div className="text-muted-foreground">Produto</div>
            <div className="text-muted-foreground">Quantidade</div>
            <div className="text-muted-foreground">Preço</div>
            <div className="text-muted-foreground">Subtotal</div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="">Produto</div>
            <div className="">2</div>
            <div className="">R$ 20,00</div>
            <div className="">R$ 40,00</div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="">Produto</div>
            <div className="">2</div>
            <div className="">R$ 20,00</div>
            <div className="">R$ 40,00</div>
          </div>
          <Separator />
          <div className="flex w-full items-center justify-between bg-muted p-2 rounded">
            <div className="text-muted-foreground">Total do pedido</div>
            <div className="">R$ 1.234,56</div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
