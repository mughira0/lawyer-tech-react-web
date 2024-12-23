import React from "react";
import Footer from "../../../components/Footer";
import ScrollToTopButton from "../../../components/ScrollToTop";
import { background } from "../../../constants/imagePath";
import HomeIconSection from "../../../sections/HomeIconSection";
import SliderSection from "../../../sections/SliderSection";
import ClientSection from "../../../sections/clientSection";
import HomeHeroSection from "../../../sections/homeHeroSection";
import HomePackageSection from "../../../sections/homePackagesSection";
import Hero from "../../../sections/mainHero";
import classes from "./home.module.css";

function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.background}>
        <img src={background} />
      </div>
      <Hero />
      <HomeIconSection />
      <SliderSection />
      <HomeHeroSection />
      <HomePackageSection />
      <ClientSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}

export default Home;
