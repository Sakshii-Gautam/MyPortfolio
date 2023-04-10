import React from 'react';
import skillIcons from '../assets/constants/skills';

const Skill = () => {
  const skillIconsTop = Object.keys(skillIcons).slice(0, 5);
  const skillIconsBottom = Object.keys(skillIcons).slice(5, 10);

  return (
    <>
      <div className='skill'>
        <div className='skill__wrapper'>
          {skillIconsTop.map((key) => (
            <img src={skillIcons[key]} alt='Image' key={key} />
          ))}
        </div>
      </div>
      <div className='skill'>
        <div className='skill__wrapper'>
          {skillIconsBottom.map((key) => (
            <img src={skillIcons[key]} alt='Image' key={`duplicate-${key}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skill;
