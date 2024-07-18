import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale } from '@fortawesome/free-solid-svg-icons';
import Dubai from './images/info-1.png';
import London from './images/info-2.png';
import Bench from './images/Bench.png';
import Bumple from './images/bumple.png';
import Forbes from './images/forbes.png';
import Shopify from './images/Shopify.png';
import Nearpad from './images/nearpad.png';

const BranchItem = ({ city, address, phone, image }) => {
  return (
    <div className="flex flex-col items-center p-6 m-4 bg-white rounded-lg ">
      <img src={image} alt={city} className="w-50 h-50 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{city}</h3>
      <p className="text-gray-600 mb-1 text-center font-semibold">{address}</p>
      <p className="text-purple-600 font-bold text-center">{phone}</p>
    </div>
  );
};

const Branch = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-6">
        <br/> <br/> <br/> <br/>
        <FontAwesomeIcon icon={faMale} className="text-6xl text-blue-500 mb-4" />
        <h2 className="text-6xl font-bold">Choose your nearest branch</h2>
      </div>
      <div className="flex justify-center flex-wrap">
        <BranchItem
          city="Dubai"
          address="2315 Al Shabab Street, Dubai, NY 10007, UAE"
          phone="212-798-1369"
          image={Dubai}
        />
        <BranchItem
          city="London"
          address="2315 Small Street, London, NY 10007, UK"
          phone="212-798-1369"
          image={London}
        />
        <BranchItem
          city="New York"
          address="2315 Small Street, New York, NY 10007, USA"
          phone="212-798-1369"
          image={Dubai}
        />
      </div>
      <br/><br/><br/><br/>
      <div className="text-center mt-6">
        <h2 className="text-2xl font-bold">We are Featured on</h2><br/>
        <ul className="flex justify-center flex-wrap mb-4">
          <li className="mr-4">
            <img src={Forbes} alt="Forbes" />
          </li>
          <li className="mr-4">
            <img src={Bench} alt="Bench" />
          </li>
          <li className="mr-4">
            <img src={Nearpad} alt="Nearpod" />
          </li>
          <li className="mr-4">
            <img src={Shopify} alt="Shopify" />
          </li>
          <li className="mr-4">
            <img src={Bumple} alt="Bumble" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Branch;