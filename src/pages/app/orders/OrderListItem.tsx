import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Search, X } from "lucide-react";
import OrderDetail from "./OrderDetail";

export default function OrderListItem() {
  return (
    <div className="border rounded-md items-center justify-center">
      {/* <div className="flex items-center gap-2">
        <span className="w-16"></span>
        <span className="w-36">Identificador</span>
        <span className="w-40">realizado há</span>
        <span className="w-36">Status</span>
        <span className="w-80">Cliente</span>
        <span className="w-44">Total do pedido</span>
        <span className="w-24"></span>
        <span className="w-24"></span>
      </div> */}

      <div className="flex items-center gap-2 p-2">
        <div className="w-16">
          <Dialog>
            <DialogTrigger>
              <Button variant="outline" size="sm">
                <Search className="h-3 w-3" />
                <span className="sr-only">Detalhes do pedido</span>
              </Button>
            </DialogTrigger>
            <OrderDetail />
          </Dialog>
        </div>
        <span className="w-36 font-mono text-xs font-medium">
          1315a4sdf64as6d4
        </span>
        <span className="w-40 text-muted-foreground">há 15 minutos</span>
        <div className="w-36 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
        <span className="w-80 font-medium">Nome do Cliente</span>
        <span className="w-44 font-medium">R$ 1.234,56</span>
        <div className="w-24">
          <Button variant="outline" size="sm">
            <ArrowRight className="h-3 w-3" />
            Aprovar
          </Button>
        </div>
        <div className="w-24">
          <Button variant="ghost" size="sm">
            <X className="h-3 w-3" />
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}
