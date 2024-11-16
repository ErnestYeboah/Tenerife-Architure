import AboutUs from "./AboutUs";
import HeroSection from "./HeroSec";
import "./main.css";
import ArchituresSec from "./Architures";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Services from "./Services";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <HeroSection />
      <ArchituresSec />
      <AboutUs />
      <Services />
    </>
  );
}
