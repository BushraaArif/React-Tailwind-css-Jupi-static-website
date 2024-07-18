import React from 'react';
import bgImage from './images/price.png'; // Replace this with the actual path to your background image

const Price = () => {
  return (
    <section
      id="price"
      className="py-5 text-center"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <br/> <br/> <br/> <br/> <br/><br/><br/><br/><br/><br/><br/><br/>
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold mb-10 text-white py-5">No Hidden Charge<br/>Choose your plan</h2>
        <div className="flex justify-center space-x-6 py-8">
          {[
            { title: 'Basic', price: '$9', features: ['1 WordPress install', 'Unlimited History', '20,000 visits', 'Integrations', '3 GB disk space', 'Free SSL & CDN'] },
            { title: 'Intermediate', price: '$19', features: ['1 WordPress install', 'Unlimited History', '20,000 visits', 'Integrations', '3 GB disk space', 'Free SSL & CDN'] },
            { title: 'Pro', price: '$29', features: ['1 WordPress install', 'Unlimited History', '20,000 visits', 'Integrations', '3 GB disk space', 'Free SSL & CDN'] },
            { title: 'Advanced', price: '$39', features: ['1 WordPress install', 'Unlimited History', '20,000 visits', 'Integrations', '3 GB disk space', 'Free SSL & CDN'] }
          ].map((plan, index) => (
            <div key={index} className="w-30 md:w-1/5 lg:w-1/7 bg-white rounded-lg shadow-lg h-300 p-6">
              <h3 className="text-xl font-semibold text-blue-950 mb-2">{plan.title}</h3>
              <p className="text-4xl font-bold text-blue-950 mb-4">{plan.price}</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="bg-purple-500 text-white px-8 py-4 rounded-md shadow-violet-800  hover:bg-purple-600 transition duration-200">Buy Now</button>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
