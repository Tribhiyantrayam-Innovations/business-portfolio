import React from 'react';
import '../style/home.css';
function Home() {
  return (
    <div className="home-page">
    <section className="hero">
        <div className="container">
            <h1>Elevate Your Business with Creative Solutions</h1>
            <p>We help brands transform their ideas into remarkable digital experiences that drive growth and engagement.</p>
            <div className="hero-buttons">
                <a href="/Services" className="cta-button">Our Services</a>
                <a href="/portfolio" className="secondary-button">View Work</a>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Home;