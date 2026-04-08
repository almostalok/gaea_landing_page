import React from 'react';
import { Leaf, Sun, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  { icon: Leaf, label: '100% Natural' },
  { icon: Sun, label: 'Farm Sourced' },
  { icon: ShieldCheck, label: 'No Adulteration' },
  { icon: Star, label: 'Premium Quality' },
];

const Values = () => {
  return (
    <section className="values-section section-padding">
      <div className="container">
        <div className="values-grid">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div 
                className="value-item glass-panel-dark" 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100 
                }}
              >
                <div className="icon-wrapper">
                  <Icon size={32} strokeWidth={1} />
                </div>
                <span className="value-label">{value.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
