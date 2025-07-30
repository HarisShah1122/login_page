import React from 'react';
import '../App.css';

const RegisterPage = () => {
  return (
    <div className="page-wrapper">
      <div className="form-card">
        <h2 className="form-title">Sign Up</h2>

        <input type="text" placeholder="Name" className="form-input" />
        <input type="email" placeholder="Email" className="form-input" />
        <input type="password" placeholder="Password" className="form-input" />
        <input type="password" placeholder="Confirm Password" className="form-input" />

        <button className="form-button">Sign Up</button>

        <div className="bottom-text">
          Already have an account? <a href="/login">Sign In</a>
        </div>

        <div className="social-icons">
          <i className="fab fa-facebook facebook"></i>
          <i className="fab fa-google google"></i>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
