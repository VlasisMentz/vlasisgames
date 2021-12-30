import React from 'react';
import LogoSteam from './../../assets/steam-logo-black-transparent.png';
import './LogoComponent.styles.css';
const LogoComponent = () => {
  return (
    <div className='steam-deals'>
      <h1 className='second-title'>
        Steam <img className='logo-image' src={LogoSteam}></img> Deals
      </h1>
    </div>
  );
};

export default LogoComponent;
