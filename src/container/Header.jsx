import React from 'react';

const Header = () => {
  return (
    <>
      <div className='header-wrapper'>
        <header className='header'>
          <div className='header__hero'>
            <div className='header__hero--heading'>
              <span>from sketches to </span>
              <span className='header__hero--heading-gradient'>Pixels :) </span>
              <br />
              <span>bringing ideas to life,</span>
              <br />
              <span> one line at a time</span>
            </div>
            <a className='header__hero--cta' href='#sectionProjects'>
              VIEW PROJECTS
            </a>
          </div>
        </header>

        <div className='header__footer'>
          <div className='header__footer--right'>
            <div className='download-resume'>
              <a href='/SakshiResume.pdf'>Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
