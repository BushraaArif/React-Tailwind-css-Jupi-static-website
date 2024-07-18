import React from 'react';
import logo from './images/Jupi.svg';
import flight from './images/flight.webp';
import watch from './images/post2.jpg';
import headphone from './images/headphone.webp';
import post from './images/post-9.png';
import post1 from './images/post-15.png';
import post3 from './images/post3.jpg'; 
import footer from './images/price.png';



const Footer = () => {
  return (
    
    <footer 
    id="footer"
    className="relative h-screen"
    style={{
      
      backgroundImage: `url(${footer})`,
      backgroundSize: '100% 100%',
        backgroundPosition: 'center',}}>
          <br/><br/><br/><br/><br/>

      <div className="container mx-auto px-20 ">
        <div className="flex flex-col md:flex-row items-center justify-between ml-13">
          <div className="mb-6 md:mb-0 ml-16">
            <img src={logo} alt="Jupi Logo" className="h-12 ml-8" />
            <h1 className="text-1xl text-white mt-2 ml-8">
              The world calls for, and expects from us, simplicity of life,<br/>
              the spirit of prayer, charity towards all, <br/>especially towards
              the lowly and the poor.simplicity of life,
              the spirit of<br/> prayer, charity towards alla
            </h1>
          </div>
          <div className="flex flex-col md:flex-row space-x-8 md:space-x-16">
            <div className="text-white">
              <h3 className="font-bold text-1xl mb-4 mr-20">Quick Link</h3>
              <ul className="list-none">
                <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Features</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Pricing</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Team</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div className="text-white">
              <h3 className="font-bold text-1xl mb-4 mr-14">Support</h3>
              <ul className="list-none">
                <li className="mb-2"><a href="#" className="hover:underline">Privacy</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Terms</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Support</a></li>
              </ul>
            </div>
            <div className="text-white">
  <h3 className="font-bold text-lg mb-4 mr-25">Gallery</h3>
  <div className="grid grid-cols-3 gap-4">
    <img src={flight} alt="Gallery Image 1" className="rounded w-20 h-20" />
    <img src={headphone} alt="Gallery Image 2" className="rounded w-20 h-20" />
    <img src={watch} alt="Gallery Image 3" className="rounded w-20 h-20" />
    <img src={post} alt="Gallery Image 4" className="rounded w-20 h-20" />
    <img src={post1} alt="Gallery Image 5" className="rounded w-20 h-20" />
    <img src={post3} alt="Gallery Image 6" className="rounded w-20 h-20" />
  </div>
</div>
          </div>
          <br/><br/><br/>

        </div>
        <div className="mt-8 text-center text-white text-1xl font-semibold">
          &copy; 2020 QuomodoThemes. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;