export interface ServicesType {
  icon?: React.ReactNode;
  title: string;
  text: string;
}

export interface NavLinkType {
  label: string;
  to: string;
  id: number;
  children?: Omit<NavLinkType, "children">[];
}
