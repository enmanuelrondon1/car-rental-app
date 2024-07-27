"use client";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { Fuel, Gauge, Gem, Heart, User, Users, Wrench } from "lucide-react";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import Image from "next/image";
import { Car } from "@prisma/client";

export const ListLovedCars = () => {
  const { addLoveItem, lovedItems, removeLovedItem } = useLovedCars();

  return (
    <>
      {lovedItems.length === 0 ? (
        <h2>Aun no dispones de coches que te gustan</h2>
      ) : (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 ">
          {lovedItems.map((car: Car) => {
            const {
              priceDay,
              photo,
              name,
              type,
              transmission,
              people,
              engine,
              id,
              cv,
            } = car;
            return (
              <div
                key={car.id}
                className="p-1 rounded-lg shadow-md hover:shadow-lg "
              >
                <Image
                  src={photo}
                  alt=""
                  width={400}
                  height={600}
                  className="rounded-lg aspect-[3/2]"
                />
                <div className="p-3  ">
                  <div className="flex flex-col mb-3 gap-x-4 ">
                    <p className="text-xl min-h-16 lg:min-h-fit">{name} </p>
                    <p className=" "> {priceDay}$ / dia</p>
                  </div>

                  <p className="flex items-center">
                    <Gem className="h-4 w-4 mr-2" />
                    {type}
                  </p>

                  <p className="flex items-center">
                    <Wrench className="h-4 w-4 mr-2" />
                    {transmission}
                  </p>

                  <p className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {people}
                  </p>

                  <p className="flex items-center">
                    <Fuel className="h-4 w-4 mr-2" />
                    {engine}
                  </p>

                  <p className="flex items-center">
                    <Gauge className="h-4 w-4 mr-2" />
                    {cv}
                  </p>

                  <div className="flex items-center justify-center gap-x-3 ">
                    <ModalAddReservation car={car} />
                    <Heart
                      className="mt-2 cursor-pointer fill-blue-700"
                      onClick={() => removeLovedItem(car.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
