import React from 'react';

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <section className="about-content">
        <div className="about-text">
          <h1>Welcome to about page</h1>
        </div>
        <div className="about-image">
          <img src="/team-photo.jpg" alt="Our Team" />
        </div>
      </section>
    </div>
  );
}

export default About;