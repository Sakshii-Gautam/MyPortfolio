import React from 'react';

const Header = () => {
  return (
    <>
      <div className='header-wrapper'>
        <header className='header'>
          <div className='header__hero'>
            <div className='header__hero--heading'>
              <div className='header__hero--heading-sm'>
                <span>From sketches to </span>
                <span className='header__hero--heading-gradient'>
                  Pixels :){' '}
                </span>
                <br />
                <span>Bringing ideas to life,</span>
                <br />
                <span> one line at a time</span>
              </div>

              <div className='header__hero--heading-lg'>
                <span>f</span>
                <span>r</span>
                <span>o</span>
                <span>m</span>&nbsp;
                <span>s</span>
                <span>k</span>
                <span>e</span>
                <span>t</span>
                <span>c</span>
                <span>h</span>
                <span>e</span>
                <span>s</span>&nbsp;
                <span>t</span>
                <span>o</span>&nbsp;
                <p className='header__hero--heading-gradient'>Pixels :) </p>
                <br />
                <span>b</span>
                <span>r</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>&nbsp;
                <span>i</span>
                <span>d</span>
                <span>e</span>
                <span>a</span>
                <span>s</span>&nbsp;
                <span>t</span>
                <span>o</span>&nbsp;
                <span>l</span>
                <span>i</span>
                <span>f</span>
                <span>e</span>
                <span>,</span>
                <br />
                <span>o</span>
                <span>n</span>
                <span>e</span>&nbsp;
                <span>l</span>
                <span>i</span>
                <span>n</span>
                <span>e</span>&nbsp;
                <span>a</span>
                <span>t</span>&nbsp;
                <span>a</span>&nbsp;
                <span>t</span>
                <span>i</span>
                <span>m</span>
                <span>e</span>
              </div>
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
