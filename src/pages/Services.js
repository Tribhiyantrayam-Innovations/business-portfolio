import React from 'react';
import '../style/services.css';

function Services() {
  return (
    <section className="services">
        <div className="service-container">
            <div className="section-title">
                <h2>What We Offer</h2>
                <p>Our team of experts provides high-quality services to help your business grow and succeed in today's competitive market.</p>
            </div>
            
            <div className="service-all">

                <div className="service-card">
                    <div className="service-img">
                        {/* <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Web Development"> */}
                    </div>
                    <div className="service-content">
                        <h3>Web Development</h3>
                        <p>We create responsive, user-friendly websites that drive engagement and conversions for your business.</p>
                        <div className="service-meta">
                            <span className="price">Starting From: $999+</span>
                            <a href="#" className="btn">Learn More</a>
                        </div>
                    </div>
                </div>

                <div className="service-card">
                    <div className="service-img">
                        {/* <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Digital Marketing"> */}
                    </div>
                    <div className="service-content">
                        <h3>Digital Marketing</h3>
                        <p>Comprehensive digital marketing strategies to increase your online visibility and customer acquisition.</p>
                        <div className="service-meta">
                            <span className="price">$799+/mo</span>
                            <a href="#" className="btn">Learn More</a>
                        </div>
                    </div>
                </div>

                <div className="service-card">
                    <div className="service-img">
                        {/* <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Branding"> */}
                    </div>
                    <div className="service-content">
                        <h3>Branding & Design</h3>
                        <p>Create a powerful brand identity that resonates with your target audience and stands out from competitors.</p>
                        <div className="service-meta">
                            <span className="price">$1,299+</span>
                            <a href="#" className="btn">Learn More</a>
                        </div>
                    </div>
                </div>

                <div className="service-card">
                    <div className="service-img">
                        {/* <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="SEO"> */}
                    </div>
                    <div className="service-content">
                        <h3>SEO Optimization</h3>
                        <p>Improve your search engine rankings and drive organic traffic to your website with our proven SEO strategies.</p>
                        <div className="service-meta">
                            <span className="price">$499+/mo</span>
                            <a href="#" className="btn">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div className="service-card">
                    <div className="service-img">
                        {/* <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Consulting"> */}
                    </div>
                    <div className="service-content">
                        <h3>Business Consulting</h3>
                        <p>Expert advice and strategies to help your business overcome challenges and achieve sustainable growth.</p>
                        <div className="service-meta">
                            <span className="price">$150/hr</span>
                            <a href="#" className="btn">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div className="service-card">
                    <div className="service-img">
                        {/* <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Content"> */}
                    </div>
                    <div className="service-content">
                        <h3>Content Creation</h3>
                        <p>High-quality content that engages your audience, builds trust, and drives conversions for your business.</p>
                        <div className="service-meta">
                            <span className="price">$299+/mo</span>
                            <a href="#" className="btn">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Services;