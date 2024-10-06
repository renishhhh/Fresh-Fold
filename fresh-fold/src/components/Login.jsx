import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: 'url("/login.jpg")',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      }}
    >
      <div className={`relative h-[510px] w-[440px] border-2 border-opacity-50 rounded-2xl backdrop-blur-md shadow-lg flex items-center justify-center overflow-hidden transition-all duration-200 ${isActive ? 'h-[520px]' : ''}`}>
        {/* Login Form */}
        <div className={`form-box w-full p-10 transition-transform duration-300 ease-in-out ${isActive ? '-translate-x-full' : 'translate-x-0'}`}>
          <h2 className="text-3xl text-blue-700 text-center font-bold">Login</h2>
          <form action="#">
            <div className="relative w-full h-12 border-b-2 border-blue-800 my-8">
              <input
                type="email"
                required
                className="h-full w-full bg-transparent border-none outline-none text-xl text-cyan-300  pl-2 pr-10 placeholder-transparent focus:outline-none focus:ring-0"
                placeholder=" "
                onFocus={(e) => e.target.classList.add('active')}
                onBlur={(e) => e.target.value === '' && e.target.classList.remove('active')}
              />
              <label className="absolute left-2 top-2 text-lg text-blue-600 font-semibold transition-all duration-200 transform scale-100 pointer-events-none input-label">Email</label>
              <FontAwesomeIcon icon={faEnvelope} className="absolute right-2 top-2 text-blue-600" />
            </div>
            <div className="relative w-full h-12 border-b-2 border-blue-800 my-8">
              <input
                type="password"
                required
                className="h-full w-full bg-transparent border-none outline-none text-xl text-cyan-300 pl-2 pr-10 placeholder-transparent focus:outline-none focus:ring-0"
                placeholder=" "
                onFocus={(e) => e.target.classList.add('active')}
                onBlur={(e) => e.target.value === '' && e.target.classList.remove('active')}
              />
              <label className="absolute left-2 top-2 text-lg text-blue-600 font-semibold transition-all duration-200 transform scale-100 pointer-events-none input-label">Password</label>
              <FontAwesomeIcon icon={faLock} className="absolute right-2 top-2 text-blue-600" />
            </div>
            <div className="flex justify-between items-center text-blue-600 mb-4">
              <label><input type="checkbox" className="accent-blue-600 font-semibold " /> Remember Me</label>
              <a className="text-blue-600 hover:underline font-semibold ">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full h-12 bg-blue-600 rounded-lg text-white ">Login</button>
            <div className="text-center text-blue-600 mt-6 font-semibold ">
              <p>Don't have an account? <button onClick={handleRegisterClick} className="text-blue-600 hover:underline">Sign In</button></p>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div className={`absolute inset-0 w-full h-full p-10 transition-transform duration-300 ease-in-out ${isActive ? 'translate-x-0' : 'translate-x-full'}`}>
          <h2 className="text-3xl font-bold text-blue-700 text-center">Sign In</h2>
          <form action="#">
            <div className="relative w-full h-12 border-b-2 border-blue-800 my-8">
              <input
                type="text"
                required
                className="h-full w-full bg-transparent border-none outline-none text-lg text-cyan-300 pl-2 pr-10 placeholder-transparent focus:outline-none focus:ring-0"
                placeholder=" "
                onFocus={(e) => e.target.classList.add('active')}
                onBlur={(e) => e.target.value === '' && e.target.classList.remove('active')}
              />
              <label className="absolute left-2 top-2 text-lg text-blue-600 font-semibold transition-all duration-200 transform scale-100 pointer-events-none input-label">Username</label>
              <FontAwesomeIcon icon={faUser} className="absolute right-2 top-2 text-blue-600" />
            </div>
            <div className="relative w-full h-12 border-b-2 border-blue-800 my-8">
              <input
                type="email"
                required
                className="h-full w-full bg-transparent border-none outline-none text-lg text-cyan-300  pl-2 pr-10 placeholder-transparent focus:outline-none focus:ring-0"
                placeholder=" "
                onFocus={(e) => e.target.classList.add('active')}
                onBlur={(e) => e.target.value === '' && e.target.classList.remove('active')}
              />
              <label className="absolute left-2 top-2 text-lg text-blue-600 font-semibold transition-all duration-200 transform scale-100 pointer-events-none input-label">Email</label>
              <FontAwesomeIcon icon={faEnvelope} className="absolute right-2 top-2 text-blue-600" />
            </div>
            <div className="relative w-full h-12 border-b-2 border-blue-800 my-8">
              <input
                type="password"
                required
                className="h-full w-full bg-transparent border-none outline-none text-lg text-cyan-300   pl-2 pr-10 placeholder-transparent focus:outline-none focus:ring-0"
                placeholder=" "
                onFocus={(e) => e.target.classList.add('active')}
                onBlur={(e) => e.target.value === '' && e.target.classList.remove('active')}
              />
              <label className="absolute left-2 top-2 text-lg text-blue-600 font-semibold transition-all duration-200 transform scale-100 pointer-events-none input-label">Password</label>
              <FontAwesomeIcon icon={faLock} className="absolute right-2 top-2 text-blue-600" />
            </div>
            <div className="flex justify-between items-center text-blue-600 font-semibold mb-4">
              <label><input type="checkbox" className="accent-blue-600" /> I agree to the terms & conditions</label>
            </div>
            <button type="submit" className="w-full h-12 bg-blue-600 rounded-lg text-white font-semibold">Sign In</button>
            <div className="text-center text-blue-600 font-semibold mt-6">
              <p>Already have an account? <button onClick={handleLoginClick} className="text-blue-600 hover:underline">Login</button></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
