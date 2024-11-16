import React from "react";
import { BsBuildings } from "react-icons/bs";
import { PiBuildingApartment } from "react-icons/pi";
import { PiBuildings } from "react-icons/pi";
import { ServicesType } from "../types/Types";

class Architectures implements ServicesType {
  constructor(
    public icon: React.ReactNode,
    public title: string,
    public text: string
  ) {}
}

const firstArc = new Architectures(
  <BsBuildings />,
  "Residential Architecture",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma"
);
const secondArc = new Architectures(
  <PiBuildings />,
  "Commercial Architecture",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma"
);
const lastArc = new Architectures(
  <PiBuildingApartment />,
  "Modern Architecture",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma"
);

export const architures: Architectures[] = [firstArc, secondArc, lastArc];
