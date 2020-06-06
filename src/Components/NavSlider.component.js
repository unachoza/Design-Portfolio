import React, { useState } from 'react';
import 'App.css';

const NavSlider = ({ isNavOpen }) => {
  console.log(isNavOpen)
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const navTrigger = (e) => {
    e.preventDefault();
    console.log('doing this', isSliderOpen);
    setIsSliderOpen(!isSliderOpen);
  };
  const toggleSlider = (e) => {
    e.preventDefault();
    setIsSliderOpen(!isSliderOpen);
    console.log(isSliderOpen, 'clicked');
  };
  //based on the state of isNavOpen the classes are determined which control is NavSlider is visible
  return (
    <nav className="cd-nav-container is-visible" id="cd-nav">
      <header>
        <a href="#0" className="cd-close-nav"
          
          // onClick={(e) => toggleSlider(e)}
          
        >
          Close
        </a>
      </header>
      <ul className="cd-nav">
        <li data-menu="index">
          <a href="#home">
            <span>&#xf447;</span>
            <em>Return Home</em>
          </a>
        </li>

        <li data-menu="projects">
          <a href="#work">
            <span>&#xf3ed;</span>

            <em>View Projects</em>
          </a>
        </li>

        <li data-menu="about">
          <a href="#about">
            <span>&#xf453;</span>

            <em style={{ color: 'green' }}>About Meee</em>
          </a>
        </li>

        <li data-menu="services">
          <a href="#services">
            <span>&#xf4a7;</span>

            <em>Services</em>
          </a>
        </li>

        <li data-menu="blog">
          <a href="blog.html" className="animsition-link" data-animsition-out="fade-out-right-delay">
            <span>&#xf3f9;</span>

            <em>Blog Posts</em>
          </a>
        </li>
        <li data-menu="contact">
          <a href="#contact">
            <span>&#xf422;</span>

            <em>Contact Me</em>
          </a>
        </li>
      </ul>{' '}
      {/* <!-- .cd-3d-nav --> */}
    </nav>

    // <div className="cd-overlay"><!-- shadow layer visible when navigation is visible --></div>
  );
};

export default NavSlider;
