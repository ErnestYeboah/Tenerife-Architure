import { NavLinkType } from "../types/Types";

class NavLinks implements NavLinkType {
  constructor(
    public label: string,
    public to: string,
    public id: number,
    public children?: Omit<NavLinkType, "children">[]
  ) {}
}

const homeLabel = new NavLinks("Home", "/", 1);
const aboutUsLabel = new NavLinks("About Us", "/about-page", 2);
const servicesLabel = new NavLinks("Services", "/services-page", 3, [
  {
    label: "Residential Architecture",
    to: "/services-page/#residential-arc-sec",
    id: 4,
  },
  {
    label: "Commercial Architure",
    to: "/services-page/#commercial-arc-sec",
    id: 5,
  },
  { label: "Modern Architure", to: "/services-page/#modern-arc-sec", id: 6 },
]);
const workingProcessLabel = new NavLinks(
  "Working Process",
  "/working-process-page",
  7,
  [
    { label: "Scoping", to: "/working-process-page/#scoping-sec", id: 8 },
    { label: "Planing", to: "/working-process-page/#planing-sec", id: 9 },
    {
      label: "Trouble Shooting",
      to: "/working-process-page/#trouble-shooting-page",
      id: 10,
    },
  ]
);

export const navLinksData: NavLinks[] = [
  homeLabel,
  aboutUsLabel,
  servicesLabel,
  workingProcessLabel,
];
