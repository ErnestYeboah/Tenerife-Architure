import { Link } from "react-router-dom";
import { NavLinkType } from "../../types/Types";

type LinksProps = {
  navData: NavLinkType;
  onClick(): void;
  className: string;
};

export default function NavLinks({ navData, onClick, className }: LinksProps) {
  const { label, to, children } = navData;

  return (
    <div className="link">
      <li className="label">
        <Link className={className} onClick={onClick} to={to}>
          {label}
        </Link>
      </li>

      {children && (
        <div className="nav__dropdown">
          {children.map((child, index) => (
            <li key={index}>
              <Link to={child.to}>{child.label}</Link>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
