import { Reveal } from "@/components/Shared/Reveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const DriveToday = () => {
  return (
    <div className="p-6 lg:my-32 max-w-7xl mx-auto ">
      <div className="bg-[url('/images/fondo.jpeg')] bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-32 relative ">
        <div className="lg:flex gap-x-6 ">
          <div className=" ">
            <h3 className="text-4xl text-white ">
              Drive your car dream car Today
            </h3>
            <p className="text-white text-xl my-5">
              Register and explore the world of premiun cars
            </p>
            <Link href="/sign-in">
              <Button variant="outline" size="lg">
                Register here
              </Button>
            </Link>
          </div>

          <Reveal position="bottom" className="lg:absolute lg:-right-32 top-5 ">
            <Image
              src="/images/car-negro.webp"
              alt="Car drive"
              width={550}
              height={250}
              className="aspect-[3/2] mr-36"
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
};
