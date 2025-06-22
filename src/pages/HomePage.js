import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MostPicked from '../components/MostPicked';
import Categories from '../components/Categories';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <MostPicked />
        <Categories />
        <Features />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
