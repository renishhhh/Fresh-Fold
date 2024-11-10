import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
            <img className="w-20" src="./public/favicon.png" alt="Logo" />
            <span className="ml-1 text-3xl font-bebas font-bold">Fresh Fold</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
            <Link className="mr-5 text-zinc-900 font-semibold hover:text-zinc-700 hover:underline cursor-pointer" to="/">Home</Link>
            <Link className="mr-5 text-zinc-900 font-semibold hover:text-zinc-700 hover:underline cursor-pointer" to="/about">About Us</Link>
            <Link className="mr-5 text-zinc-900 font-semibold hover:text-zinc-700 hover:underline cursor-pointer" to="/services">Services</Link>
            <ScrollLink 
              to="contact-section" 
              smooth={true} 
              duration={500} 
              className="mr-5 text-zinc-900 font-semibold hover:text-zinc-700 hover:underline cursor-pointer">
              Contact
            </ScrollLink>
          </nav>

          {/* Conditionally render Login or Signed In button */}
          {isLoggedIn ? (
            <div className="inline-flex items-center text-white font-semibold py-2 px-3 mt-4 md:mt-0">
              <span>Signed In</span>
              <button 
                onClick={handleLogout} 
                className="ml-3 bg-red-600 text-white font-semibold py-2 px-3 rounded hover:bg-red-500">
                Logout
              </button>
            </div>
          ) : (
            <button className="inline-flex items-center bg-blue-600 text-white font-semibold border-0 py-2 px-3 focus:outline-none hover:bg-sky-600 rounded text-base mt-4 md:mt-0">
              <Link to="/login">Login</Link>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          )}
        </div>
      </header>
      {/* Add some margin-top to prevent the content from hiding under the navbar */}
      <div className="mt-[100px]"></div>
    </div>
  );
};

export default Navbar;
