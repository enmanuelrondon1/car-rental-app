import { auth } from "@clerk/nextjs/server";
import { ListLovedCars } from "./components/ListLovedCars";
import { redirect } from "next/navigation";

export default function LoveCarsPage() {

  const {userId} = auth()

  if(!userId) {
    return redirect('/')
  }

  return (
    <div className=" ">
      <h1 className="text-2xl">Coches que te gustan</h1>
      <ListLovedCars />
    </div>
  );
}
