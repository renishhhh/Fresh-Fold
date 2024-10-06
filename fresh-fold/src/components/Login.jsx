import React, { useState } from 'react';
import './Login.css'; // Make sure to keep the CSS file in the same directory


const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`box ${isActive ? 'active' : ''}`}>
      <div className="form-box Login">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon"><i className="fa-solid fa-envelope"></i></span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon"><i className="fa-solid fa-lock"></i></span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember Me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="login-register">
            <p>Don't have an account?<button onClick={handleRegisterClick} className="register-link"> SignIn</button></p>
          </div>
        </form>
      </div>

      <div className="form-box Register">
        <h2>SignIn</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon"><i className="fa-solid fa-user"></i></span>
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon"><i className="fa-solid fa-envelope"></i></span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon"><i className="fa-solid fa-lock"></i></span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />I agree to the terms & conditions</label>
          </div>
          <button type="submit" className="btn">SignIn</button>
          <div className="login-register">
            <p>Already have an account?<button onClick={handleLoginClick} className="login-link"> Login</button></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
