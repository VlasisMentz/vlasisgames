import React from 'react';
import LogoSteam from './../../assets/steam-logo-black-transparent.png';
import './LogoComponent.styles.css';
const LogoComponent = () => {
  return (
    <>
      <h1 className='second-title'>
        Steam <img className='logo-image' src={LogoSteam}></img> Deals
      </h1>
    </>
  );
};

export default LogoComponent;
