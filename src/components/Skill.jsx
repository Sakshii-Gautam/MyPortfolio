import React from 'react';
import skillIcons from '../assets/constants/skills';
import { motion } from 'framer-motion';

const Skill = () => {
  const skillIconsTop = Object.keys(skillIcons).slice(0, 7);
  const skillIconsBottom = Object.keys(skillIcons).slice(7, 14);
  const skillIconsAll = Object.keys(skillIcons).slice(0, 14);

  return (
    <>
      {/* for large devices */}
      <motion.div
        className='skill'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className='skill__wrapper'>
          {skillIconsTop.map((key) => (
            <img src={skillIcons[key]} alt='Image' key={key} />
          ))}
        </div>
      </motion.div>
      <motion.div
        className='skill'
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className='skill__wrapper'>
          {skillIconsBottom.map((key) => (
            <img src={skillIcons[key]} alt='Image' key={`duplicate-${key}`} />
          ))}
        </div>
      </motion.div>

      {/* for smaller devices */}
      <motion.div
        className='skill__mobile'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className='skill__mobile--wrapper'>
          {skillIconsAll.map((key) => (
            <img src={skillIcons[key]} alt='Image' key={key} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Skill;
