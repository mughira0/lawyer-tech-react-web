import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PackageCard from "../../components/packageCard";
import classes from "./homePackageSection.module.css";

function HomePackageSection() {
  const fadeInOutVariants = {
    hidden: { opacity: 0, translateY: 100 }, // Start hidden and below
    visible: { opacity: 1, translateY: 0 }, // Fade in and move to position
  };

  return (
    <div className={classes.main}>
      <Container>
        <Row>
          <Col lg={12} md={12}>
            <div className={classes.content}>
              <h5>Classes</h5>
              <h1>Discover a diverse array of experiences</h1>
            </div>
          </Col>
          {PackageArray.map((item, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                viewport={{ once: false, amount: 0.5 }}
                variants={fadeInOutVariants}
                transition={{ duration: 0.6 }}
                className={classes.cardWrapper} // Add wrapper styling
              >
                <PackageCard index={index} item={item} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default HomePackageSection;

const PackageArray = [
  {
    type: "monthly",
    price: 9.99,
    title: "Starter",
    perks: ["1 Free Trial", "Partner Discount", "Expert Support"],
  },
  {
    type: "yearly",
    price: 19.99,
    title: "Premium",
    perks: ["1 Free Trial", "Partner Discount", "Expert Support"],
  },
  {
    type: "yearly",
    price: 99.99,
    title: "Ultimate",
    perks: ["1 Free Trial", "Partner Discount", "Expert Support"],
  },
];
