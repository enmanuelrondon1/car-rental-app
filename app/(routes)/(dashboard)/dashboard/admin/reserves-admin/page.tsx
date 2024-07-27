import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { TableReserves } from "./components/TableReserves";
import { isAdministrator } from "@/lib/isAdministrator";

export default async function pageReservesAdmin() {
  const { userId } = auth();
  const user = await currentUser();


  if (!userId || !isAdministrator(userId)) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(user)

  return (
    <div className=" ">
      <h1 className="text-3xl mb-4">Reserves Page</h1>

      <TableReserves orders={orders} />
    </div>
  );
}
