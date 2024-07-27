import * as React from "react";
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { FiltersCarsProps } from "./FiltersCars.types";
import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

export const FiltersCars = (props: FiltersCarsProps) => {
  const { clearFilters, setFilters, filters } = props;

  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };

  return (
    <div className="mt-5 mb-8 flex flex-col space-y-4 md:flex-row md:space-y-0 md:gap-5 ">
      <Select
        onValueChange={(value) => handleFilter("type", value)}
        value={filters.type}
      >
        <SelectTrigger className="w-[180px] ">
          <SelectValue placeholder="tipo de vehiculo" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipo de vehiculo</SelectLabel>
            <SelectItem value="suv">SUV</SelectItem>
            <SelectItem value="coupe">Coupe</SelectItem>
            <SelectItem value="familiar">Familiar</SelectItem>
            <SelectItem value="luxe">De luxe</SelectItem>
            <SelectItem value="sedan">Sedan</SelectItem>

          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("transmission", value)}
        value={filters.transmission}
      >
        <SelectTrigger className="w-[180px] ">
          <SelectValue placeholder="Cambio de marchas" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Cambio de marchas</SelectLabel>
            <SelectItem value="automatic">Automatico</SelectItem>
            <SelectItem value="manual">Manual</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("engine", value)}
        value={filters.engine}
      >
        <SelectTrigger className="w-[180px] ">
          <SelectValue placeholder="tipo de motor" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipo de motor</SelectLabel>
            <SelectItem value="gasoil">Gasoil</SelectItem>
            <SelectItem value="diesel">Diesel</SelectItem>
            <SelectItem value="electric">Electic</SelectItem>
            <SelectItem value="hybrid">Hibrido</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("people", value)}
        value={filters.people}
      >
        <SelectTrigger className="w-[180px] ">
          <SelectValue placeholder="Personas" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Personas</SelectLabel>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="7">7</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button onClick={clearFilters}>
        Remove filters <Trash className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};
