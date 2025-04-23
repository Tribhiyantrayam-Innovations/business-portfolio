import React from 'react'

export default function header() {
  return (
    <header>
    <div class="container">
      <div class="logo">
        <a href="/">Your Startup</a>
      </div>
      <nav>
        <ul>
          <li><a href="/" className="<%= page === 'home' ? 'active' : '' %>">Home</a></li>
          <li><a href="/about" className="<%= page === 'about' ? 'active' : '' %>">About</a></li>
          <li><a href="/services" className="<%= page === 'services' ? 'active' : '' %>">Services</a></li>
          <li><a href="/portfolio" className="<%= page === 'portfolio' ? 'active' : '' %>">Portfolio</a></li>
          <li><a href="/blog" className="<%= page === 'blog' ? 'active' : '' %>">Blog</a></li>
          <li><a href="/contact" className="<%= page === 'contact' ? 'active' : '' %>">Contact</a></li>
        </ul>
      </nav>
      <div class="menu-toggle">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </header>
  )
}
