import React from 'react';
import './MenuLeft.scss';
import smilies from '../../assets/images/smilies.png';
import menuIcon from '../../assets/icons/menu-icon.png';

function MenuLeft() {
  return (
    <div className="menu-left">
      <div className="hamburger-menu">
        <img src={menuIcon} className="hamburger-menu-btn" alt="hamburger-icon-btn" />
      </div>
      <img src={smilies} className="smiles" alt="smilies" />
      <h2>TARGET MVD</h2>
      <h3>Find people near you & connect</h3>
      <p className="intro-description">Create a  target  wherever on the map, specify your interest: Travel, Dating, Music, etc and start conecting with others who share your interest.</p>
    </div>
  );
}


export default MenuLeft;
