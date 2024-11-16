import Button from "../../components/Button/Button";

export default function AboutUs() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="about-us-sec"
    >
      <div className="image__parent">
        <img src="/images/client.jpg" alt="" height="100%" />
      </div>

      <div className="about-us-text">
        <h3 className="highlight" style={{ color: "var(--accent-clr)" }}>
          About Us
        </h3>
        <h2 className="h2-like-h1">
          We Design Transformational Places That Improve Life
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          voluptatem aperiam ipsam veniam harum dolorem porro voluptatibus,
          iusto soluta eveniet quasi est praesentium mollitia cum sed amet
          assumenda autem. Tempora?
        </p>

        <Button type="regular">Learn More</Button>
      </div>
    </section>
  );
}
