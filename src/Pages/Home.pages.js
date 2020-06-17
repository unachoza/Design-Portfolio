import React from 'react';
import Header from 'Components/Header.component';
import AnimatedHeader from 'Components/a';
import NavSlider from 'Components/NavSlider.component';
import MenuSlider from 'Components/MenuSlider';

import 'App.css';

const Home = () => {
  return (
    <div className="home__container">
      <Header />
      <AnimatedHeader />
      <MenuSlider />
      <div className="projects__container"></div>
    </div>
  );
};

export default Home;
