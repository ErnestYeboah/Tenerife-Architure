import { useState } from "react";
import { services } from "../../data-exports/servicesData";
import Card from "../../components/Card/Card";
export default function Services() {
  const [servicesData] = useState(services);
  return (
    <section className="services__sec">
      <div className="first__child">
        <h3 className="highlight h2-like-h1">Our Services</h3>
        <h2 className="h2-like-h1">
          We Design Buildings And Interiors That Nurture And Inspire
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          doloribus magnam, cumque animi sapiente .
        </p>
      </div>
      <div className="last__child">
        {servicesData.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
