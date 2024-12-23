import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { BsFillBarChartFill, BsFillPeopleFill } from "react-icons/bs";
import {
  FaBalanceScale,
  FaComments,
  FaFileContract,
  FaProjectDiagram,
} from "react-icons/fa";
import { HiDocumentSearch, HiOutlineClipboardList } from "react-icons/hi";
import styles from "./homeIconSection.module.css";

const features = [
  {
    icon: <FaBalanceScale size={40} className={styles.icon} />,
    label: "Legal Research",
    description:
      "Efficiently explore case laws, statutes, and legal precedents.",
  },
  {
    icon: <FaComments size={40} className={styles.icon} />,
    label: "Conversation Module",
    description:
      "Engage with AI-powered legal assistants for queries and guidance.",
  },
  {
    icon: <FaProjectDiagram size={40} className={styles.icon} />,
    label: "Case Connection Map",
    description: "Visualize relationships between cases for better insights.",
  },
  {
    icon: <FaFileContract size={40} className={styles.icon} />,
    label: "Contract Analysis",
    description: "Automate review and highlight crucial contract details.",
  },
  {
    icon: <HiDocumentSearch size={40} className={styles.icon} />,
    label: "Document Analysis",
    description: "Quickly analyze legal documents with advanced AI tools.",
  },
  {
    icon: <HiOutlineClipboardList size={40} className={styles.icon} />,
    label: "Form Editor",
    description: "Create and customize legal forms with ease and accuracy.",
  },
  {
    icon: <BsFillPeopleFill size={40} className={styles.icon} />,
    label: "Client Intake",
    description: "Streamline client onboarding with tailored workflows.",
  },
  {
    icon: <BsFillBarChartFill size={40} className={styles.icon} />,
    label: "Scenario Analyzer",
    description: "Simulate legal scenarios to predict potential outcomes.",
  },
];

const HomeIconSection = () => {
  return (
    <AnimatedSection>
      <div className={styles.featuresSection}>
        <h2 className={styles.heading}>Explore Our Key Features</h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              {feature.icon}
              <h3 className={styles.label}>{feature.label}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HomeIconSection;
export const AnimatedSection = ({ children, direction = "up" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      className={styles.main}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};
