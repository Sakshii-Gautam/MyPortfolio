import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <h1 className='heading-1'>
          <span>Dont be a stranger!</span> <small>👋</small>
        </h1>
        <p className='paragraph'>Connect with me online</p>
        <div className='footer--links'>
          <Link
            rel='noopener'
            target='_blank'
            to='https://github.com/Sakshii-Gautam'
          >
            👾 GitHub
          </Link>
          <Link
            rel='noopener'
            target='_blank'
            to='https://www.linkedin.com/in/sakshii-gautam/'
          >
            💼 LinkedIn
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
