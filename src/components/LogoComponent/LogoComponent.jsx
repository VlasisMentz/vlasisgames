import React from 'react';
import LogoSteam from './../../assets/steam-logo-black-transparent.png';
import './LogoComponent.styles.css';
import { FaSteam } from 'react-icons/fa';
const LogoComponent = () => {
  return (
    <div className='steam-deals'>
      <h1 className='second-title'>
        Steam Deals <FaSteam /> by Vlasis
      </h1>
    </div>
  );
};

export default LogoComponent;
