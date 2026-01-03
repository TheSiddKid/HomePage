import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="logo">Junaid Siddiqui</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#profile">Full Profile</a>
          <a href="#contact">Contact</a>
          <button id="themeToggle" className="btn small">Toggle Theme</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
