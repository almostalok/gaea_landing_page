import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      // Replace this URL with your actual endpoint (e.g., Formspree, SheetDB, or Web3Forms)
      const response = await fetch('https://formspree.io/f/xkopeqza', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('Could not send data. Please try again later.');
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-bg">
        <img src="/images/hero_bg.png" alt="GAEA Premium Background" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-inner hero-glass"
        >
          <img src="/images/logo.png" alt="GAEA Gold Harvest Logo" className="logo-img" />
          <h1 className="hero-title hero-title-light">GAEA Gold Harvest</h1>
          <p className="hero-subtitle hero-subtitle-light">Pure food, reimagined. Premium farm-sourced products crafted with purity, transparency, and care. Coming soon.</p>
          
          <form className="hero-form" onSubmit={handleSubmit}>
            {!isSubmitted ? (
              <div className="input-wrapper">
                <input 
                  type="email" 
                  placeholder="Enter your email to join waitlist" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary">Notify Me</button>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="success-message"
              >
                You're on the list.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
