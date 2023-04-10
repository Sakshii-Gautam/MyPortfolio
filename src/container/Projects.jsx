import React from 'react';
import { Card } from '../components';
import { images } from '../assets/constants';

const Projects = () => {
  return (
    <>
      <div id='sectionProjects' className='projects'>
        <h1 className='heading-1'>
          <span>Creative coding at play </span> <small>💼</small>
        </h1>
        <p className='paragraph'>No, I don't do bugs...</p>

        <Card
          image={images.flixio}
          name='Flixio'
          link='https://flixio.netlify.app/'
          git='https://github.com/Sakshii-Gautam/Flixio'
        />
        <Card
          image={images.imagination}
          name='ImagiNation - AI '
          link='https://imagi-nation.netlify.app/'
          git='https://github.com/Sakshii-Gautam/Imagi-Nation'
        />
        <Card
          image={images.goals}
          name='Goal Setter'
          link='https://goal-setter-application.netlify.app/'
          git='https://github.com/Sakshii-Gautam/Goal-Setter-App'
        />
      </div>
    </>
  );
};

export default Projects;
