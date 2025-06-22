import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import MostPicked from './components/MostPicked';
import Categories from './components/Categories';
import Testimonial from './components/Testimonial';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <MostPicked />
            <Categories />
            <Features />
            <Testimonial />
          </>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
