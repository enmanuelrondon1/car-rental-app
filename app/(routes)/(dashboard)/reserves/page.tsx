import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { TableReserves } from "./components/TableReserves";

export default async function ReservesPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className=" ">
      <h1 className="mb-4 text-3xl">Reserves Page </h1>
      {orders.length === 0 ? (
        <div className="flex flex-col justify-center gap-4  ">
          <h2 className="text-xl">No tienes ningun pedido</h2>
          <p>Haz tu pedido a traves de la pagina de vehiculos</p>

          <Link href="/cars">
            <Button>Lista de vehiculos</Button>
          </Link>
        </div>
      ) : (
        <TableReserves orders={orders} />
      )}
    </div>
  );
}
