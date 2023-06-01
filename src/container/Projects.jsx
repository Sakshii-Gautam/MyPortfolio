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
          number='1'
          image={images.flixio}
          name='Flixio'
          link='https://flixio.netlify.app/'
          git='https://github.com/Sakshii-Gautam/Flixio'
        />
        <Card
          number='2'
          image={images.platepal}
          name='PlatePal'
          link='https://platepal-project.web.app/'
          git='https://github.com/Sakshii-Gautam/Plate-Pal'
        />
        <Card
          number='3'
          image={images.socialsync}
          name='SocialSync'
          link='https://social-sync.netlify.app/'
          git='https://github.com/Sakshii-Gautam/social-sync'
        />
        <Card
          number='4'
          image={images.imagination}
          name='ImagiNation - AI '
          link='https://imagi-nation.netlify.app/'
          git='https://github.com/Sakshii-Gautam/Imagi-Nation'
        />
        <Card
          number='5'
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
