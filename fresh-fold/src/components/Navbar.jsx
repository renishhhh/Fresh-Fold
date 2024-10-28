import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className='w-20' src="./public/favicon.png" alt="Logo" />
            <span className="ml-1 text-3xl font-bebas font-bold"> <Link to="/">Fresh Fold</Link></span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <ScrollLink to="contact-section" smooth={true} duration={500} className="mr-5 hover:text-gray-900 cursor-pointer">
              Contact
            </ScrollLink>
            <a className="mr-5 hover:text-gray-900">About Us</a>
            <a className="mr-5 hover:text-gray-900">Services</a>
            <a className="mr-5 hover:text-gray-900">FAQs</a>
          </nav>
          <button className="inline-flex items-center bg-blue-600 text-white font-semibold border-0 py-2 px-3 focus:outline-none hover:bg-sky-600 rounded text-base mt-4 md:mt-0">
            <Link to="/login">Login</Link>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
