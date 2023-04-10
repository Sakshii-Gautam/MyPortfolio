import React from 'react';
import { Link } from 'react-router-dom';
import { svgs } from '../assets/constants';

const Card = ({ image, name, link, git }) => {
  return (
    <>
      <div className='card'>
        <div className='card__image'>
          <img src={image} alt='project card image' />
        </div>

        <div className='card__right'>
          <h2 className='heading-2'>{name}</h2>

          <Link className='card__link' rel='noopener' target='_blank' to={link}>
            VISIT THE WEBSITE
          </Link>

          <div className='card__socials'>
            <Link to={git} rel='noopener' target='_blank'>
              <img src={svgs.github} alt='github icon' />
            </Link>
            <Link to={link} rel='noopener' target='_blank'>
              <img src={svgs.link_icon} alt='link icon' />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
