import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img className='w-20' src="./public/logo.png" alt="" />
      <span className="ml-1 text-2xl font-bebas">Fresh Fold</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Fresh Fold.All rights reserved
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-3 mt-4 justify-center sm:justify-start">
    <a 
  href="https://github.com/renishhhh/Fresh-Fold" 
  className="ml-3 text-gray-500 hover:text-black transition-colors duration-200 ease-in-out"
  target="_blank" 
  rel="noopener noreferrer"
  aria-label="GitHub Profile"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-1 -1 26 26"  
    fill="currentColor" 
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path 
      d="M12 0.5C5.7 0.5 0.5 5.7 0.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.2c-3.2.7-3.8-1.6-3.8-1.6-.5-1.3-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.3-1.1.5-1.3-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.3.1-2.7 0 0 1-.3 3.2 1.2.9-.3 1.8-.4 2.7-.4s1.9.1 2.8.4c2.1-1.5 3.2-1.2 3.2-1.2.6 1.4.3 2.4.1 2.7.7.8 1.2 1.8 1.2 3.1 0 4.6-2.7 5.5-5.3 5.8.3.3.5.7.5 1.5v2.3c0 .4.2.7.8.6C20.8 21.4 24 17.1 24 12c0-6.3-5.2-11.5-11.5-11.5z"
    />
  </svg>
</a>


    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer
