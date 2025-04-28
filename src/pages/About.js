import React from 'react';
import '../style/about.css';
import logo from '../logo.jpg';


function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
        <section className="about-section">
            <div className="about-content">
                <h2>Our Story</h2>
                <p>Founded in 2015, YourBusiness began as a small startup with a big vision. Our founders recognized a gap in the market for high-quality, client-focused services that prioritize both innovation and reliability.</p>
                <p>Over the years, we've grown into a trusted partner for businesses across multiple industries, helping them achieve their goals through our tailored solutions and expert team.</p>
                <p>What sets us apart is our commitment to excellence in every project we undertake. We don't just meet expectations - we exceed them, delivering results that drive real business value.</p>
            </div>
            <div className="about-image">
                <img src={logo} alt="Our office space" />
            </div>
        </section>
    </div>
  );
}

export default About;