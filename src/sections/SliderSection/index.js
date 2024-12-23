import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Building1, Building2, Building3 } from "../../constants/imagePath";
import "./styles.css";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-prev" onClick={onClick}>
      <ChevronLeft />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-next" onClick={onClick}>
      <ChevronRight />
    </button>
  );
};

export default function SliderSection() {
  const slides = [
    {
      title: "We can see the bigger picture",
      description:
        "We use innovative approaches to solve the toughest challenges for company businesses.",
      image: Building1,
    },
    {
      title: "Legal Excellence Redefined",
      description:
        "Combining decades of experience with modern legal solutions for today's challenges.",
      image: Building2,
    },
    {
      title: "Your Success, Our Priority",
      description:
        "Strategic legal counsel that drives business growth and ensures compliance.",
      image: Building3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <main>
      <section className="hero-section">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div
                className="hero-slide"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
                }}
              >
                <div className="hero-content">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-description">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </main>
  );
}
