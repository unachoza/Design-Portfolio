import React from 'react';
import Header from 'Components/Header.component'
import NavSlider from 'Components/NavSlider.component'
import 'App.css'

const Home = () => {
  return (
    <div className="home__container">
      <header className="home__header">UI Portfolio Arianna Choza</header>
      <Header />
      <NavSlider/>
    </div>
  );
};

export default Home;
