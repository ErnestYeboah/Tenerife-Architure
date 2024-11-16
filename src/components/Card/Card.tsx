import "./cardStyles.css";
import { ServicesType } from "../../types/Types";

export default function Card({ data }: { data: ServicesType }) {
  const { icon, text, title } = data;

  return (
    <div className="card">
      <span className="icon__parent">{icon}</span>
      <h3 className="highlight">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
