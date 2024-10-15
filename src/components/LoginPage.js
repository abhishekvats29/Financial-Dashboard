import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignInPage.css';
import illustration from '../assets/images/pic.jpeg';
import googleLogo from '../assets/images/google.jpeg';
import appleLogo from '../assets/images/apple.jpeg'; 
import logo from '../assets/images/Logo1.jpeg';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const validUsername = "Admin";
    const validPassword = "GDT";
    
    if (username === validUsername && password === validPassword) {
      navigate('/dashboard');
    } else {
      setError('Wrong credentials');
      alert('Wrong credentials');
    }
  };

  return (
    
    <div className='container'>
        <div className="logo">
        <img src={logo} alt="My Logo" />
        </div>
      <div className="left-section">
        <h1>Sign in to</h1>
        <h3>Lorem Ipsum is simply</h3>
        <p>If you don't have an account register You can</p>
        
        <Link to="/signup">Register here!</Link>
        <div className="illustration">
        <img src={illustration} alt="Illustration" />
        </div>
      </div>
      <div className="right-section">
        <h2>Sign in</h2>
        <form>
          <div className="form-group">
            
            <input
              type="text"
              placeholder="Enter email or username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <button type="button" onClick={handleLogin} className="login-button">Login</button>
        </form>
        <p className="or-continue">or continue with</p>
        <div className="social-login">
        <button className="social-login-button">
            <img src={appleLogo} alt="Apple" className="social-login-img" />
          </button>
          <button className="social-login-button">
            <img src={googleLogo} alt="Google" className="social-login-img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
