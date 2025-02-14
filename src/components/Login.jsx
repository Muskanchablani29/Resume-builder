import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Welcome Back!</h1>
        <p className="login-subtitle">Login to access your account</p>

        <form className="login-form">
          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        {/* Links */}
        <div className="login-links">
          <a href="/forgot-password">Forgot Password?</a>
          <span> | </span>
          <a href="/signup">Create an Account</a>
        </div>
      </div>
    </div>
  );
}
