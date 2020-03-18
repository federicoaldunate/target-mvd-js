import React from 'react';
import './MenuLeft.scss';
import smilies from '../../assets/images/smilies.png';
import menuIcon from '../../assets/icons/menu-icon.png';
import { FormattedMessage } from 'react-intl';

const MenuLeft = ()  => (
  <div className="menu-left">
    <div className="hamburger-menu">
      <img src={menuIcon} className="hamburger-menu-btn" alt="hamburger-icon-btn" />
    </div>
    <img src={smilies} className="smiles" alt="smilies" />
    <h2>TARGET MVD</h2>
    <h3><FormattedMessage id="home.subtitle" /></h3>
    <p className="intro-description"><FormattedMessage id="home.description" /></p>
  </div>
);

export default MenuLeft;
