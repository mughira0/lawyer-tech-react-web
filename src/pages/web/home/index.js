import React from "react";
import Footer from "../../../components/Footer";
import ScrollToTopButton from "../../../components/ScrollToTop";
import { texture } from "../../../constants/imagePath";
import HomeIconSection from "../../../sections/HomeIconSection";
import HomeHeroSection from "../../../sections/homeHeroSection";
import HomePackageSection from "../../../sections/homePackagesSection";
import Hero from "../../../sections/mainHero";
import classes from "./home.module.css";

function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.background}>
        <img src={texture} />
      </div>
      <Hero />
      <HomeHeroSection />
      <HomeIconSection />
      <HomePackageSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}

export default Home;
