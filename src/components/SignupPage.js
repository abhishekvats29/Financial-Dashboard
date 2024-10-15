import React from 'react';
import './SignInPage.css';
import illustration from '../assets/images/pic.jpeg';
import logo from '../assets/images/Logo1.jpeg';
import googleLogo from '../assets/images/google.jpeg';
import appleLogo from '../assets/images/apple.jpeg';

const SignupPage = () => {
  return (
    <div className="container">
        <div className="logo">
        <img src={logo} alt="My Logo" />
        </div>
      <div className="left-section">
        <h1>Sign Up to</h1>
        <h3>Lorem Ipsum is simply</h3>
        <p>If you already have an account you can</p>
        <a href="#/">Loginin here !</a>
        <div className="illustration">
        <img src={illustration} alt="Illustration" />
        </div>
      </div>
      <div className="right-section">
        <h2>Sign up</h2>
        <form>
          <div className="form-group">
            
            <input type="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            
            <input type="text" placeholder="Create User name" />
          </div>
          <div className="form-group">
            
            <input type="text" placeholder="Contact number" />
          </div>
          <div className="form-group">
            
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-group">
            
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button type="submit" className="login-button">Register</button>
        </form>
        <p className="or-continue">or continue with</p>
        <div className="social">
        <button className="social-button">
            <img src={appleLogo} alt="Apple" className="social-login-img" />
          </button>
          <button className="social-button">
            <img src={googleLogo} alt="Google" className="social-login-img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
