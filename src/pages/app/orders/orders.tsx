import { useQuery } from "@tanstack/react-query";
import OrderFilter from "./OrderFilter";
import OrderListItem from "./OrderListItem";
import { getOrders } from "@/api/get-orders";

export default function Orders() {
  const { data: result } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <OrderFilter />
        <div className="border-b-2 items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="w-16"></span>
            <span className="w-36">Identificador</span>
            <span className="w-40">realizado há</span>
            <span className="w-36">Status</span>
            <span className="w-80">Cliente</span>
            <span className="w-44">Total do pedido</span>
            <span className="w-24"></span>
            <span className="w-24"></span>
          </div>
        </div>
        {result &&
          result.orders.map((order, index) => {
            return <OrderListItem key={index} order={order} />;
          })}
      </div>
    </div>
  );
}
