import React from 'react';
import Header from './header';
import heroImage from './images/header1.png';
import headphone from './images/headphone.webp';


const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
      }}
    >
      
      <Header />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-6xl font-bold mb-6">
          The best landing page <br />for your digital product.
        </h1>
        <p className="text-1xl mb-6">
          Our cloud computing platform was built with simplicity so managing infrastructure is easy.
        </p>
        <br/>


        <a href="#services" className="bg-white text-black font-bold px-14 py-5 rounded hover:bg-yellow-600">
          Discover Now
        </a>
        <div className="w-full md:w-1/2 xl:w-1/2 p-4 mb-4 md:mb-0">
            <img src={headphone} alt="heaphone" className="w-200 h-200 mb-4" />
          </div>
      </div>
    </section>
  )
}
export default Hero;