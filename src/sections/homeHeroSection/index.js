import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import Button from "../../components/Button";
import { heroSection } from "../../constants/imagePath";
import classes from "./homeHeroSection.module.css";

function HomeHeroSection() {
  // Scroll Animation Triggers
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.7, duration: 0.8 },
    },
  };

  return (
    <div className={classes.heroSection}>
      <Container>
        <motion.div
          className={classes.main}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <Row>
            <Col className={classes.col} lg={6} md={6} sm={12} xs={12}>
              <motion.div
                className={classes.left}
                variants={textVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <h2>Everything a Lawyer needs. All in one place.</h2>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit amet,
                  consectetur adipiscing elit amet, consectetur adipiscing elit
                  consectetur adipiscing elit
                </p>
                <motion.div
                  className={classes.buttonContainer}
                  variants={buttonVariants}
                >
                  <Button label="Get Started" variant="normal" />
                  <Button label="Learn More" variant="cutHoverBordered" />
                </motion.div>
              </motion.div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <motion.div
                className={classes.right}
                variants={imageVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <div className={classes.imageContainer}>
                  <motion.img
                    src={heroSection}
                    alt="heroSection"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 1 },
                    }}
                  />
                </div>
                <motion.div
                  className={classes.buttonTab}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1, duration: 0.8 },
                  }}
                >
                  <p>We help thousands of lawyers find their clients</p>
                  <Button label="Chat Now" variant="normal" />
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}

export default HomeHeroSection;
