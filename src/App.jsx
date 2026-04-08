import React from 'react';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import Products from './components/Products';
import Values from './components/Values';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <BrandStory />
      <Products />
      <Values />
      <Footer />
    </div>
  );
}

export default App;
