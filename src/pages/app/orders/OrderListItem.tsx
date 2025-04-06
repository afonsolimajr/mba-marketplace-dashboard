import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Search, X } from "lucide-react";
import OrderDetail from "./OrderDetail";
import { formatMoney } from "@/utils/NumberUtil";
import { distanceFromNow } from "@/utils/DateUtil";
import ItemStatus from "./ItemStatus";

export interface OrderListItemProps {
  orderId: string;
  createdAt: Date;
  status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
  customerName: string;
  total: number;
}

export default function OrderListItem({
  order,
}: {
  order: OrderListItemProps;
}) {
  return (
    <div className="border rounded-md items-center justify-center">
      <div className="flex items-center gap-2 p-2">
        <div className="w-16">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Search className="h-3 w-3" />
                <span className="sr-only">Detalhes do pedido</span>
              </Button>
            </DialogTrigger>
            <OrderDetail />
          </Dialog>
        </div>
        <span className="w-36 font-mono text-xs font-medium">
          {order.orderId}
        </span>
        <span className="w-40 text-muted-foreground">
          {distanceFromNow(order.createdAt)}
        </span>
        <ItemStatus status={order.status} />
        <span className="w-80 font-medium">{order.customerName}</span>
        <span className="w-44 font-medium">{formatMoney(order.total)}</span>
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
