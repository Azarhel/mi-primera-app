import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
        <nav className={scrolled ? 'scrolled' : ''}>
            <ul>
                <li>                    
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </React.Fragment>
  );
};

export default NavigationBar;