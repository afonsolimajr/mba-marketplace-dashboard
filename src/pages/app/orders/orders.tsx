import { useQuery } from "@tanstack/react-query";
import OrderFilter from "./OrderFilter";
import OrderListItem from "./OrderListItem";
import { getOrders } from "@/api/get-orders";
import Pagination from "@/components/pagination";
import { useSearchParams } from "react-router";
import { z } from "zod";

export default function Orders() {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get("page") ?? "1");

  const { data: result } = useQuery({
    queryKey: ["orders", pageIndex],
    queryFn: () => getOrders({ pageIndex }),
  });

  function handlePaginate(pageIndex: number) {
    setSearchParams((prev) => {
      prev.set("page", (pageIndex + 1).toString());

      return prev;
    });
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        <div className="space-y-2.5">
          <OrderFilter />
          <div className="flex flex-col border-t-2 items-center justify-center gap-1">
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
            {result &&
              result.orders.map((order, index) => {
                return <OrderListItem key={index} order={order} />;
              })}
          </div>
          {result && (
            <Pagination
              pageIndex={result?.meta.pageIndex}
              perPage={result?.meta.perPage}
              totalCount={result?.meta.totalCount}
              onPageChange={handlePaginate}
            />
          )}
        </div>
      </div>
    </div>
  );
}
