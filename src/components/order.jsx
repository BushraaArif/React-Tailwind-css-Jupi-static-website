import React from 'react';

const Order = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 mb-20">
      <div className="bg-white drop-shadow-lg rounded px-12 pt-12 pb-12 mb-4">
        <div className="flex justify-center">
          <h1 className="text-6xl font-bold mb-8 text-center">Never miss any update</h1>
        </div>
        <div className="flex justify-center mb-12">
          <div className="w-full md:w-3/4 xl:w-3/4 p-6">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-3/4 p-4 pl-12 text-lg text-gray-700 border border-gray-300 rounded"
              />
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white w-half font-bold py-3 px-6 rounded ml-4"
              >
                Pre Book My Order
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <p className="text-lg text-gray-400 text-center">
            *Your email address is safe with us. We never share your email address.
          </p>
          
        </div>
        
      </div>
      
    </div>
    
    
  );
};


export default Order;