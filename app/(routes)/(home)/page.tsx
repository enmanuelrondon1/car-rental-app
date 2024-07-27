import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FirstBlock } from "./components/FirtsBlock";
import { SliderBrands } from "./components/SliderBrands";
import { Features } from "./components/Features";
import { OurFleet } from "./components/OurFleet";
import { DriveToday } from "./components/DriveToday";

export default function Home() {
  return (
    <div className="">
  <Navbar/>
  <FirstBlock />
  <SliderBrands />
  <Features />
  <OurFleet />
  <DriveToday />
    
    </div>
  );
}
