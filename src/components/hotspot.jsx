import React from 'react';
import headphoneImage from './images/headphone.webp'; // Replace this with the actual path to your headphone image
import hotspotIcon from './images/Middle-Section.webp'; // Replace this with the actual path to your hotspot icon

const Hotspots = () => {
  return (
    <section id="hotspots" className="py-20 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold mb-6 text-blue-950">Awesome features <br/>with hotspots</h2>
        <div className="relative flex justify-center">
          <img
            src={hotspotIcon}
            alt="Hotspot"
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            style={{ top: '10%', zIndex: 1, maxWidth: '90%' }} // Ensuring the middle section image is behind
          />
          <img
            src={headphoneImage}
            alt="Headphone"
            className="relative z-10" // Ensuring the headphone image is in front
            style={{ maxWidth: '60%' }} // Adjust the maxWidth as needed
          />
        </div>
      </div>
    </section>
  );
};

export default Hotspots;
