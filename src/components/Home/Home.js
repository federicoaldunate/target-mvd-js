import React from 'react';
import './Home.scss';
import AppAdvert from '../AppAdvert/AppAdvert';
import MenuLeft from '../MenuLeft/MenuLeft';

)
const Home = () => (
  <div className="home-divider">
    <MenuLeft />
    <AppAdvert />
  </div>
);

export default Home;
