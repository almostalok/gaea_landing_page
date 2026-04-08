import React from 'react';
import { motion } from 'framer-motion';

const BrandStory = () => {
  return (
    <section className="story-section section-padding curved-section">
      <div className="container text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <h2 className="story-text">
            We believe real food begins at the source.<br/>
            GAEA brings you carefully sourced,<br/>
            minimally processed products straight from trusted farms.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
