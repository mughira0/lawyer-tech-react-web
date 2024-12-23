import React from "react";
import { user } from "../../constants/imagePath";
import { AnimatedSection } from "../HomeIconSection";
import styles from "./clientSection.module.css";

const ClientReviews = () => {
  return (
    <AnimatedSection>
      <div className={styles.featuresSection}>
        <h2 className={styles.heading}>What our clients say</h2>
        <div className={styles.grid}>
          {clientArr.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.img}>
                {" "}
                <img src={feature.img} alt={feature.name} />
              </div>
              <h3 className={styles.label}>{feature.name}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ClientReviews;

const clientArr = [
  {
    name: "Sophia Johnson",
    img: user, // Replace with real image URLs
    description:
      "The team went above and beyond to ensure our project was completed on time and to the highest quality. Highly recommend their services!",
  },
  {
    name: "Liam Smith",
    img: user, // Replace with real image URLs
    description:
      "Fantastic experience! Their attention to detail and professionalism exceeded my expectations.",
  },
  {
    name: "Olivia Brown",
    img: user, // Replace with real image URLs
    description:
      "Great support throughout the process. They understood our requirements and delivered exactly what we needed.",
  },
  {
    name: "Ethan Davis",
    img: user, // Replace with real image URLs
    description:
      "They made the entire process seamless and stress-free. I’m extremely satisfied with the outcome!",
  },
  {
    name: "Emma Wilson",
    img: user, // Replace with real image URLs
    description:
      "The team was responsive and efficient. They delivered the project on time and within budget.",
  },
  {
    name: "Noah Taylor",
    img: user, // Replace with real image URLs
    description:
      "I couldn't be happier with the outcome. The team's professionalism and expertise exceeded my expectations.",
  },
  {
    name: "Ava Anderson",
    img: user, // Replace with real image URLs
    description:
      "The team's attention to detail and creativity were outstanding. They exceeded my expectations with their work.",
  },
  {
    name: "Elijah Thomas",
    img: user, // Replace with real image URLs
    description:
      "The team's professionalism and expertise exceeded my expectations. They delivered a high-quality product that exceeded my expectations.",
  },
];
