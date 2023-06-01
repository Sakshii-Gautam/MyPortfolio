import React from 'react';
import { Link } from 'react-router-dom';
import { svgs } from '../assets/constants';
import { motion } from 'framer-motion';

const Card = ({ image, name, link, git, number }) => {
  return (
    <>
      <motion.div
        initial={{ x: number % 2 === 0 ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='card'
      >
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
      </motion.div>
    </>
  );
};

export default Card;
