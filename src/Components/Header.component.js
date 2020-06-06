import React from 'react';
import 'App.css'

const Header = () => {
  return (
      <div className="nav-wrapper cbp-af-header">
        <img className="logo" src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1573225833/photo-877.gif" alt="duck hunt dog placeholder"/>
        <a href="#cd-nav" className="cd-nav-trigger">
            <span>{/* <!-- used to create the menu icon --> */}</span> 
        </a> {/* <!-- .cd-nav-trigger --> */}
      </div>
  );
};

export default Header;
