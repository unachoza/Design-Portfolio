import React, { useState } from 'react';
import NavSlider from 'Components/NavSlider.component';
import 'App.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navTrigger = (e) => {
    e.preventDefault();
    console.log('doing this', isNavOpen);
    setIsNavOpen(!isNavOpen);
  };

  return (
    <React.Fragment>
      <div className="nav-wrapper cbp-af-header">
        <img
          className="logo"
          src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1573225833/photo-877.gif"
          alt="duck hunt dog placeholder"
        />
        <a href="#cd-nav" className="cd-nav-trigger" onClick={(e) => navTrigger(e)}>
          <span>{/* <!-- used to create the menu icon --> */}</span>
        </a>{' '}
        {/* <!-- .cd-nav-trigger --> */}
      </div>
      {isNavOpen && <NavSlider isNavOpen={isNavOpen} />}
    </React.Fragment>
  );
};

export default Header;
