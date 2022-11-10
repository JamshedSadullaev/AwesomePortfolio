import React from 'react';
import Avatar from '../../img/avatar.jpg';
import BootstrapLogo from '../../img/bootstrap.png';
import CSS3Logo from '../../img/css.png';
import HTLM5Logo from '../../img/html.png';
import jQueryLogo from '../../img/jQuery.png';
import JSLogo from '../../img/Javascript.png';


const styles = {
  orangeFont: {
    color: '#D19A66',
  },
  purpleFont: {
    color: '#C678D2',
  },
  greenFont: {
    color: '#98C36E',
  },
  dark: {
    color: 'black',
  },
  blueFont: {
    color: '#61AFEF',
  },
  dark: {
    color: 'black',
  },
};

const Home = () => {
  return (
    <div className='container'>
      <main className='row mt-3'>
        <div className='col'>
          <div className='card cardHome bg-primary w-100'>
            <div className='row card-body'>
              <img className='avatar mt-lg-5' src={Avatar} alt='sans' />
              <div className='col-sm-9'>
                <h2 className='card-title'>
                  <span style={styles.dark}>About me  </span>
                </h2>
                <hr className='text-white'></hr>
                <p className='card-text text-green' style={styles.dark}>
                  'Full Stack Web developer with the experience of Javascript and 
                  React designing web applications and problem solving skills.
                  Recently earning a certificate from University of Pennsylvania Coding Bootcamp.'
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className='row mt-3'>
        <div className='col'>
          <div className='card cardHome text-end text-white bg-primary w-100'>
            <div className='row card-body'>
              <div className='col-sm-12'>
                <h3 className='card-title'>

                  <span style={styles.dark}>Techs I have experience with </span>

                </h3>
                <hr></hr>

                <div className='row'>
                  <img
                    className='tech-avatar'
                    src={HTLM5Logo}
                    height='auto'
                    width='70%'
                  />
                  <img
                    className='tech-avatar'
                    src={CSS3Logo}
                    height='auto'
                    width='70%'
                  />
                  <img
                    className='tech-avatar'
                    src={JSLogo}
                    height='auto'
                    width='70%'
                  />
                  <img
                    className='tech-avatar'
                    src={jQueryLogo}
                    height='auto'
                    width='70%'
                  />

                  <img
                    className='tech-avatar'
                    src={BootstrapLogo}
                    height='auto'
                    width='70%'
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;