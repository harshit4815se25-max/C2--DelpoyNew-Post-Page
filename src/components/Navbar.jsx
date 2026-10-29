import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">DEV@Deakin</h2>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#articles">Articles</a>
        <a href="#subscribe">Subscribe</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;