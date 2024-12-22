"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../../components/Button";
import { Lawyer, Lawyer1 } from "../../constants/imagePath";
import styles from "./Hero.module.css";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const testimonials = [
  { id: 1, avatar: Lawyer1 },
  { id: 2, avatar: Lawyer },
  { id: 3, avatar: Lawyer1 },
  { id: 4, avatar: Lawyer },
];

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        {/* Main Content */}
        <div className={styles.grid}>
          <div className={styles.content}>
            <motion.h1
              className={styles.title}
              {...fadeIn}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              A Lawyer Dedicated to Protecting The Rights of All
            </motion.h1>

            <motion.p
              className={styles.description}
              {...fadeIn}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              Experienced and knowledgeable lawyer offering top-notch legal
              representation and advocacy services.
            </motion.p>

            <motion.div {...fadeIn} transition={{ duration: 0.9, delay: 0.5 }}>
              <Button
                className={styles.button}
                label="Get Started"
                variant="cutHoverBordered"
              ></Button>
            </motion.div>

            <motion.div
              className={styles.testimonials}
              {...fadeIn}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <div className={styles.avatars}>
                {testimonials.map((testimonial) => (
                  <img
                    key={testimonial.id}
                    src={testimonial.avatar}
                    alt=""
                    className={styles.avatar}
                  />
                ))}
              </div>
              <div>
                <div className={styles.clientCount}>13k+</div>
                <div className={styles.clientText}>Satisfied clients</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            t
            transition={{ duration: 0.9, delay: 0.8 }}
          >
            <img
              src={Lawyer}
              alt="Professional Lawyer"
              className={styles.image}
            />
            <div className={styles.controls}>
              <button className={styles.controlButton}>
                <ChevronLeft className={styles.icon} />
              </button>
              <button className={styles.controlButton}>
                <ChevronRight className={styles.icon} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
