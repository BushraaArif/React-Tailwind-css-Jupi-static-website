import React from 'react';
import logo from './images/Jupi.svg'; // Adjust the path based on your structure

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-10 py-3 ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <img src={logo} alt="Jupi Logo" className="h-12" /> 
          </div>

          <nav class="navbar mainmenu-area affix-top" data-spy="affix" data-offset="100">        
                <ul className="flex justify-center space-x-14">
            <li className="relative group">
            <a href="#home" className="text-white hover:text-yellow-500 cursor-pointer">
  Home
</a>

  <ul className="absolute hidden bg-white mt-2 py-2 w-32 rounded-lg shadow-lg hover:block !important">
    <li><a href="#home-blog" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog</a></li>
    <li><a href="#home-pages" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Pages</a></li>
    <li><a href="#home-dummy" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dummy</a></li>
  </ul>
</li>

              <li><a href="#services" className="text-white hover:text-yellow-500">Services</a></li>
              <li><a href="#price" className="text-white hover:text-yellow-500">Price</a></li>
              <li className="relative group">
                <a href="#about" className="text-white hover:text-yellow-500">
                  About
                </a>
              </li>
              <li className="relative group">
                <a href="#portfolio" className="text-white hover:text-yellow-500">
                  Pages
                </a>
                <ul className="absolute hidden bg-white mt-2 py-2 w-32 rounded-lg shadow-lg hover:block">
                  <li><a href="#portfolio-blog" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog</a></li>
                  <li><a href="#portfolio-pages" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Pages</a></li>
                  <li><a href="#portfolio-dummy" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dummy</a></li>
                </ul>
              </li>
              <li><a href="#testimonials" className="text-white hover:text-yellow-500">Testimonials</a></li>
              <li><a href="#contact" className="text-white hover:text-yellow-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
