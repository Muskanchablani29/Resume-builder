import React from "react";
import "./Aboutsecond.css";
import { Link, NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in">About Our Resume Builder</h1>
          <p className="fade-in">Helping job seekers craft professional resumes that stand out!</p>
          <NavLink to="/Template"><button className="cta-button scale-up">Start Building Your Resume</button></NavLink>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mission">
        <h2 className="slide-in-left">Our Mission</h2>
        <p>
          At Resume Builder, our mission is to empower individuals to showcase
          their skills and accomplishments in the best way possible. We believe
          that a well-crafted resume is the key to unlocking career
          opportunities.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="slide-in-right">Features</h2>
        <div className="feature-grid">
          <div className="feature-item fade-in">
            <h3>Easy-to-Use Templates</h3>
            <p>Create a professional resume in minutes with our user-friendly templates.</p>
          </div>
          <div className="feature-item fade-in">
            <h3>Customizable Designs</h3>
            <p>Personalize your resume to match your style and career goals.</p>
          </div>
          <div className="feature-item fade-in">
            <h3>Expert Guidance</h3>
            <p>Receive tips and examples to craft the perfect resume.</p>
          </div>
          <div className="feature-item fade-in">
            <h3>ATS-Friendly</h3>
            <p>Ensure your resume passes applicant tracking systems effortlessly.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="why-choose-us">
        <h2 className="slide-in-left">Why Choose Us?</h2>
        <ul>
          <li>Trusted by thousands of job seekers worldwide.</li>
          <li>Easy-to-use platform designed for everyone.</li>
          <li>Regularly updated templates for modern job markets.</li>
          <li>Free and premium options to suit your needs.</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="slide-in-right">What Our Users Say</h2>
        <div className="testimonial-item fade-in">
          <p>
            "I landed my dream job thanks to this resume builder. The templates
            and tips were invaluable!"
          </p>
          <h4>- Sarah J.</h4>
        </div>
        <div className="testimonial-item fade-in">
          <p>
            "I’ve tried other resume builders, but this one is by far the easiest
            to use and most effective."
          </p>
          <h4>- Michael T.</h4>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="cta-section">
        <h2 className="fade-in">Ready to Create Your Resume?</h2>
        <p>Join thousands of satisfied users and build your perfect resume today!</p>
        <button className="cta-button scale-up">Get Started Now</button>
      </section>
    </div>
  );
}
