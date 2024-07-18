import React from 'react';
import person1 from './images/1.png';
import person2 from './images/2.png';
import person3 from './images/3.png';
import person4 from './images/4.png';
import person5 from './images/5.png';
import person6 from './images/6.png';
import person7 from './images/6.png';

const Testimonial = () => {
  return (
    <section id="testimonial" className="py-20 bg-gray-100">
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-6xl font-bold mb-6 text-blue-950">Peoples always loves<br/> our products</h2>
        <div className="relative flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.431L24 9.587l-6 5.847 1.414 8.229L12 18.75 4.586 23.663 6 15.434 0 9.587l8.332-1.569z"/>
                  </svg>
                ))}
              </div>
            </div>
            <blockquote className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </blockquote>
            <p className="font-bold text-blue-950">Carolina Monntoya</p>
            <p className="text-blue-500">Founder, Uithemes</p>
          </div>
        </div>
        <div className="flex justify-center mt-10 space-x-4">
          <img src={person1}alt="Person 1" className="w-24 h-24 rounded-full border-4 border-white" />
          <img src={person2} alt="Person 2" className="w-24 h-24 rounded-full border-4 border-white" />
          <img src={person3} alt="Person 3" className="w-24 h-24 rounded-full border-4 border-white" />
          <img src={person4} alt="Person 4" className="w-24 h-24 rounded-full border-4 border-white" />
          <img src={person5} alt="Person 5" className="w-24 h-24 rounded-full border-4 border-white" />
          <img src={person6} alt="Person 6" className="w-24 h-24 rounded-full border-4 border-white" />
          <img src={person7} alt="Person 7" className="w-24 h-24 rounded-full border-4 border-white" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
