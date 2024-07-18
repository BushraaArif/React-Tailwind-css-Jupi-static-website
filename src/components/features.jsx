import React from 'react';
import flight from './images/flight.webp';
import watch from './images/post-9.png';
import headphone from './images/headphone.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faCloud, faBox, faFolder } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Features = () => {
  return (
  
    <section id="features" className="py-100">
      <div className="container mx-auto p-4">
        <br/><br/><br/><br/><br/>
        
    
        <div className="flex flex-col md:flex-row justify-center mb-12 ml-8 mr-8">
          <div className="w-full md:w-1/2 xl:w-1/2 p-4 mb-4 md:mb-0">
            <img src={flight} alt="Book your flights from anywhere" className="w-50 h-50 mb-2 ml-20"/>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/2 p-4 mb-4 md:mb-0">
            <h3 className="text-7xl font-bold mb-6 text-blue-950">Book your flights from anywhere</h3>
            <p className="text-1xl mb-6 mr-30">
              <br/>
              Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat.
              In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus,
              et molestie sem tortor quis duiDuis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat.
              In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus,
              et molestie sem tortor quis dui.Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat.
              In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus,
              et molestie sem tortor quis duiDuis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat.
              
            </p>
            <br/>
            <div className="mb-4"></div>
            <a href="#services" className="bg-purple-700 text-white font-bold px-14 py-5 flex-col space-y-20 rounded hover:bg-yellow-600">Discover Now</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center mb-12">
          <div className="w-full md:w-1/2 xl:w-1/2 p-4 mb-4 md:mb-0 ml-20">
            <h3 className="text-7xl font-bold mb-6 text-blue-950 py-6 ml-20">World best water resistant watch.</h3>
            <p className="text-1xl mb-6 ml-20">
              Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat.
              In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus,
              et molestie sem tortor quis dui.Duis rhoncus dui venenatis consequat porttitor.<br/> Etiam aliquet congue consequat.
              In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus,
              et molestie sem tortor quis duiDuis rhoncus dui venenatis consequat porttitor. <br/>Etiam aliquet congue consequat.
             
            </p>
            <div className="mt-20"></div>
            <a href="#services" className="bg-blue-800 text-white font-bold px-14 py-6 ml-20  rounded hover:bg-yellow-600">Discover Now</a>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/2 p-4 mb-4 md:mb-0 ">
            <img src={watch} alt="World best water resistant watch." className="w-75 h-75 mb-2 ml-20 " />
          </div>
        </div>

        <h2 className="text-6xl font-bold mb-6 text-center text-blue-950">Much more exclusive <br />features</h2>
        <div className="flex flex-col md:flex-row justify-center mb-12">
          <div className="w-full md:w-1/2 xl:w-1/2 p-4 mb-4 md:mb-0 flex justify-center">
            <img src={headphone} alt="Headphone" className="w-3/4 h-auto mb-10" />
          </div>
          <div className="w-full md:w-1/2 xl:w-1/2 p-4 mb-4 md:mb-0 flex flex-wrap justify-end">
            <div className="w-50% md:w-1/2 xl:w-1/2 p-4 mb-4 card text-center bg-white shadow-lg">
              <FontAwesomeIcon icon={faPencilRuler} className="text-blue-500 text-5xl mb-2" />
              <h3 className="text-xl font-bold mb-2">Pixel Perfect</h3>
              <p>In at iaculis lorem ipsum. Raesent tempor dictum tellus ut molestie.</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4 mb-4 card text-center bg-white shadow-lg">
              <FontAwesomeIcon icon={faCloud} className="text-purple-500 text-5xl mb-2" />
              <h3 className="text-xl font-bold mb-2">Cloud Service</h3>
              <p>In at iaculis lorem ipsum. Raesent tempor dictum tellus ut molestie.</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4 mb-4 card text-center  bg-white shadow-lg">
              <FontAwesomeIcon icon={faBox} className="text-yellow-500 text-5xl mb-2" />
              <h3 className="text-xl font-bold mb-2">Vector Editing</h3>
              <p>In at iaculis lorem ipsum. Raesent tempor dictum tellus ut molestie.</p>
            </div>
            <div className="w-50 md:w-1/2 xl:w-1/2 p-4 mb-4 card text-center  bg-white shadow-lg">
              <FontAwesomeIcon icon={faFolder} className="text-blue-500 text-5xl mb-2" />
              <h3 className="text-xl font-bold mb-2">Export Presets</h3>
              <p>In at iaculis lorem ipsum. Raesent tempor dictum tellus ut molestie.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
