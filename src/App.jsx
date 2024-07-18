import React from 'react';
import Header from './components/header';
import Hero from './components/Hero';
import Hotspot from './components/hotspot';
import Fearures from './components/features';
import Testimonial from './components/testimonial';
import Price from './components/price';
import Branch from './components/branch';
import Order from './components/order';
import Footer from './components/footer';

import './style.css';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Features from './components/features'
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features/>
      <Testimonial/>
      <Hotspot/>
      <Price/>
      <Branch/>
      <Order/>
      <Footer/>
    </div>
  );
}

export default App;
