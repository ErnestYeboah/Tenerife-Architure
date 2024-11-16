import Button from "../../components/Button/Button";
export default function HeroSection() {
  return (
    <div className="hero__sec">
      <div className="hero__text">
        <h1>
          Global
          <span style={{ color: "var(--accent-clr)" }}>Architectural</span> Firm
        </h1>
        <Button type="regular">Learn More</Button>
      </div>
      <div className="hero__image">
        <div className="box"></div>

        <div className="box">
          <h2>220</h2>
          <p>Property Build</p>
        </div>
      </div>
    </div>
  );
}
