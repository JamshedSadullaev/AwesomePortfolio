import React from 'react';
import Project from '../project';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Weather from '../../img/weather.jpg';
import PasswordGenerator from '../../img/password.jpg';
import Food from '../../img/food.jpg';


const Front = () => {
  return (
    <Container>
      <br />
      <Card border='danger' className='text-center'>
        <Carousel
          variant='dark'
          interval={9000}
          nextIcon={
            <span
              aria-hidden='true'
              className='carousel-control-next-icon'
              id='my-carousel-right'
            />
          }
          prevIcon={
            <span
              aria-hidden='true'
              className='carousel-control-prev-icon'
              id='my-carousel-left'
            />
          }
        >

          <Carousel.Item>
            <Project
              title='Weather Dashboard App'
              image={Weather}
              desc='That helps to find weather condition prior to any plan.'
              jargon='Front End application that uses third party APIs and local
              storage to provide up to date weather information.'
              repo='https://github.com/mmelan000/Weather-Dashboard-powered-by-API'
              deploy='https://jamshedsadullaev.github.io/AwesomeWeatherForecaster/'
              techs='Weather API'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Project
              title='Food and Weather'
              image={Food}
              desc='Menu of Foods and Drinks'
              jargon="Front End application and API."
              repo='https://jamshedsadullaev.github.io/Peculiar-terror/'
              deploy='https://github.com/JamshedSadullaev/Peculiar-terror'
              techs='CSS, Bulma,JavaScript'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Project
              title='Password Generating'
              image={PasswordGenerator}
              desc="Makes any type of password for websites"
              jargon='Front End application'
              repo='https://github.com/JamshedSadullaev/Third-Challenge'
              deploy='https://jamshedsadullaev.github.io/Third-Challenge/'
              techs='CSS3, HTML5, JavaScript'
            />
          </Carousel.Item>

        </Carousel>
      </Card>
    </Container>
  );
};

export default Front;