import "./main.css";
import { useState } from "react";
import { architures } from "../../data-exports/architecturesData";
import Card from "../../components/Card/Card";
export default function ArchituresSec() {
  const [servicesData] = useState(architures);

  return (
    <section className="architures__sec">
      <h2>Services</h2>
      <div className="architures__cards">
        {servicesData.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
