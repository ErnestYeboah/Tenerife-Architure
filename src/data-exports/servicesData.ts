import { ServicesType } from "../types/Types";

class Services implements ServicesType {
  constructor(public title: string, public text: string) {}
}

const firstService = new Services(
  "Architure",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma"
);
const secondService = new Services(
  "Interior Design",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma"
);
const thirdService = new Services(
  "Consulting",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma"
);
const lastService = new Services(
  "LandScaping",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma"
);

export const services: Services[] = [
  firstService,
  secondService,
  thirdService,
  lastService,
];
