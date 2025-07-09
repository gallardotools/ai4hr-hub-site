import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import LearningModules from '../components/LearningModules';
import Community from '../components/Community';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <LearningModules />
      <Community />
      <Testimonials />
      <Pricing />
    </>
  );
};

export default HomePage;