import React, { useState } from "react";
import {
  Building1,
  Building2,
  Building3,
  Lawyer,
  Lawyer1,
} from "../../constants/imagePath";
import classes from "./Carousel.module.css";

function Carousel() {
  const [activeImage, setActiveImage] = useState(0);
  const [secondImage, setSecondImage] = useState(1);
  return (
    <div className={classes.main}>
      <div
        className={classes.image}
        onClick={() => {
          setSecondImage(activeImage);
          setActiveImage((prev) => {
            if (prev === 0) {
              return images.length - 1;
            } else {
              return prev - 1;
            }
          });
        }}
      >
        <img src={images[activeImage]} alt="" />
      </div>
      <div
        className={classes.imageSecond}
        onClick={() => {
          setActiveImage(secondImage);
          setSecondImage((prev) => {
            if (prev === images.length - 1) {
              return 0;
            } else {
              return prev + 1;
            }
          });
        }}
      >
        <img src={images[secondImage]} alt="" />
      </div>
    </div>
  );
}

export default Carousel;
const images = [Building1, Building3, Building2, Lawyer, Lawyer1];
