import React, { Component } from 'react';
import '../css/layout.css';

const MenuSlider = (props) => {
  console.log('is', props.fire);

  return (
    <div>
      <nav
        className={props.isVisible ? 'cd-nav-container is-visible' : 'cd-nav-container'}
        onClick={(e) => console.log(e.target.id)}
        id="cd-nav"
      >
        <header>
          <a href="#0" className="cd-close-nav" onClick={props.fire}>
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

              <em>About Me</em>
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
        </ul>
        {/* <!-- .cd-3d-nav --> */}
      </nav>
    </div>
  );
};

export default MenuSlider;
