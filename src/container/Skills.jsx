import React from 'react';
import Skill from '../components/Skill';

const Skills = () => {
  return (
    <>
      <div className='skills'>
        <div className='skills__top'>
          <h1 className='heading-1'>
            <span>Web wizardry in progress...</span> <small>😊</small>
          </h1>
          <p className='paragraph paragraph__sub'>No dark arts here!</p>
        </div>

        <Skill />
      </div>
    </>
  );
};

export default Skills;
