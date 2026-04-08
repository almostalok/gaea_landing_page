import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'Cold-Pressed Oils',
    image: '/images/oil_product_new.png',
  },
  {
    id: 2,
    title: 'Natural Spices',
    image: '/images/spices_product_new.png',
  },
  {
    id: 3,
    title: 'Grains & Pulses',
    image: '/images/grains_product_new.png',
  },
  {
    id: 4,
    title: 'Pure Ghee',
    image: '/images/ghee_product.png',
  },
  {
    id: 5,
    title: 'Organic Flour',
    image: '/images/flour_product.png',
  },
  {
    id: 6,
    title: 'Basmati Rice',
    image: '/images/rice_product.png',
  }
];

const Products = () => {
  return (
    <section className="products-section section-padding">
      <div className="container" style={{ position: 'relative' }}>
        <h2 style={{ color: '#D4AF37', textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', letterSpacing: '0.1em' }}>OUR PRODUCTS</h2>
        
        <div className="scroll-indicator">
          <span>Swipe</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>

        <div className="products-scroll">
          {products.map((product, index) => (
            <motion.div 
              className="product-card glass-panel" 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring", 
                bounce: 0.3 
              }}
            >
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.title} />
                <div className="product-label-overlay">
                  <img src="/images/logo.png" alt="GAEA Label" />
                </div>
              </div>
              <h3 className="product-title">{product.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
