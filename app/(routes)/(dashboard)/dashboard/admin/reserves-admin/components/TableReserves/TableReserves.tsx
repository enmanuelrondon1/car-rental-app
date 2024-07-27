import { formatPrice } from "@/lib/formaPrice";
import { TableReservesProps } from "./TableReserves.types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const TableReserves = (props: TableReservesProps) => {
  const { orders } = props;

  const totalAmount = orders.reduce((acc, booking) => {
    return acc + parseFloat(booking.totalAmount);
  }, 0);

  return (
    <Table>
      <TableCaption>A list of your recent bookings.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order Date</TableHead>
          <TableHead>Customer ID</TableHead>
          <TableHead>Car </TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>Date end</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">
              {new Date(order.createdAt).toLocaleDateString("es-ES", {
                day:"2-digit",
                month:"2-digit",
                year:"numeric",
              })}
            </TableCell>

            <TableCell className="font-medium max-w-[100px] truncate ">
              {order.userId}{" "}
            </TableCell>

            <TableCell className="font-medium"> {order.carName}</TableCell>

            <TableCell>
              {new Date(order.orderDate).toLocaleDateString("es-ES", {
                day:"2-digit",
                month:"2-digit",
                year:"numeric",
              })}
            </TableCell>

            <TableCell>
              {new Date(order.orderEndDate).toLocaleDateString("es-ES", {
                day:"2-digit",
                month:"2-digit",
                year:"numeric",
              })}
            </TableCell>

            <TableCell className="text-right">
              {formatPrice(Number(order.totalAmount))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right" >
            {formatPrice(totalAmount)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
