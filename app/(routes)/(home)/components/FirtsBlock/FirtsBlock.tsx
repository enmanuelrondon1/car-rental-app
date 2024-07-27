import { Reveal } from "@/components/Shared/Reveal";
import Image from "next/image";

export const FirstBlock = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center ">
      <Reveal className="p-6 lg:pl-40 " position="bottom">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold ">
          Premiun
          <span> Rental Cars </span>
          in Venezuela
        </h1>
        <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm ">
          Dont deny yourself pleasure of driving the best premiun cars from
          around the world here and now
        </p>
      </Reveal >
      <Reveal position="right" delay={2} className="flex justify-end ">
        <Image
          src="/images/Toyota_Camry.jpg"
          alt="Rental cars"
          width={800}
          height={800}
          priority
          className="bg-white "
        />
      </Reveal>
    </div>
  );
};
