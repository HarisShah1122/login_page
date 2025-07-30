import React from 'react';
import '../App.css'; 

const LoginPage = () => {
  return (
    <div className="page-wrapper">
      <div className="form-card">
        <h2 className="form-title">Sign In</h2>

        <input type="email" placeholder="Email" className="form-input" />
        <input type="password" placeholder="Password" className="form-input" />

        <div className="forgot-password">Forget Password?</div>

        <button className="form-button">Sign In</button>

        <div className="bottom-text">
          Don't have an account? <a href="/register">Sign Up</a>
        </div>

        <div className="social-icons">
          <i className="fab fa-facebook facebook"></i>
          <i className="fab fa-google google"></i>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
