import React from 'react';
import './Home.scss';
import AppAdvert from '../AppAdvert/AppAdvert';
import MenuLeft from '../MenuLeft/MenuLeft';

function Home() {
  return (
    <div className="home-divider">
      <MenuLeft />
      <AppAdvert />
    </div>
  );
}


export default Home;
